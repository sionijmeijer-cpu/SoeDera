// Redirect file - insights now served from /blog
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/insights' as any)({
  beforeLoad: () => {
    throw redirect({ to: '/blog' })
  },
  component: () => null,
})
