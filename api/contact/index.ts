import { AzureFunction, Context, HttpRequest } from '@azure/functions'

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const { name, email, company, message } = req.body || {}

    if (!name || !email || !message) {
      context.res = {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Name, email and message are required.' }),
      }
      return
    }

    const tenantId = process.env.AZURE_TENANT_ID
    const clientId = process.env.AZURE_CLIENT_ID
    const clientSecret = process.env.AZURE_CLIENT_SECRET

    if (!tenantId || !clientId || !clientSecret) {
      context.log.error('Missing Azure credentials in environment variables.')
      context.res = {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Server configuration error.' }),
      }
      return
    }

    // Step 1: Get access token
    const tokenResponse = await fetch(
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: clientId,
          client_secret: clientSecret,
          scope: 'https://graph.microsoft.com/.default',
        }),
      }
    )

    if (!tokenResponse.ok) {
      const err = await tokenResponse.text()
      context.log.error('Token error:', err)
      context.res = {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Failed to authenticate with Microsoft.' }),
      }
      return
    }

    const tokenData = await tokenResponse.json()
    const access_token = tokenData.access_token

    // Step 2: Send email via Microsoft Graph
    const emailPayload = {
      message: {
        subject: `New enquiry from ${name}${company ? ` — ${company}` : ''}`,
        body: {
          contentType: 'HTML',
          content: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
              <div style="background: #0ea5e9; padding: 24px 32px; border-radius: 8px 8px 0 0;">
                <h1 style="color: white; font-size: 20px; margin: 0; font-family: Georgia, serif;">New Contact Form Submission</h1>
                <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 13px;">SøDera Website</p>
              </div>
              <div style="background: white; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; width: 120px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                      <a href="mailto:${email}" style="color: #0ea5e9; font-size: 14px; font-weight: 600;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Company</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">${company || 'Not provided'}</td>
                  </tr>
                </table>
                <div>
                  <p style="color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message</p>
                  <div style="background: #f8fafc; border-left: 3px solid #0ea5e9; padding: 16px 20px; border-radius: 0 8px 8px 0; color: #334155; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
                </div>
                <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #f1f5f9;">
                  <a href="mailto:${email}?subject=Re: Your enquiry to SøDera" style="display: inline-block; padding: 12px 24px; background: #0ea5e9; color: white; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600;">Reply to ${name}</a>
                </div>
              </div>
            </div>
          `,
        },
        toRecipients: [{ emailAddress: { address: 'info@soedera.eu' } }],
        replyTo: [{ emailAddress: { address: email, name: name } }],
      },
      saveToSentItems: false,
    }

    const sendResponse = await fetch(
      `https://graph.microsoft.com/v1.0/users/info@soedera.eu/sendMail`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      }
    )

    if (!sendResponse.ok) {
      const err = await sendResponse.text()
      context.log.error('Send email error:', err)
      context.res = {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Failed to send email. Please try again or email us directly at info@soedera.eu.' }),
      }
      return
    }

    context.res = {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true }),
    }
  } catch (err) {
    context.log.error('Unexpected error:', err)
    context.res = {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Something went wrong. Please email us directly at info@soedera.eu.' }),
    }
  }
}

export default httpTrigger
