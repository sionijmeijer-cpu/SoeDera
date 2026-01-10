import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Zap,
  Shield,
  BarChart,
  Users,
  Globe,
  ArrowRight,
  Check,
  Star,
  Mail,
  XIcon
} from "lucide-react";

const LandingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-white/20 text-white hover:bg-white/30">
                Now in Beta
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Transform Your Business with AI-Powered Solutions
              </h1>
              <p className="text-xl text-emerald-100 md:text-2xl">
                Streamline workflows, boost productivity, and scale faster with our intelligent platform designed for modern teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-2xl flex items-center justify-center">
                <BarChart className="h-32 w-32 text-white/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-b bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-600 mb-8">
            TRUSTED BY LEADING COMPANIES WORLDWIDE
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {["Company A", "Company B", "Company C", "Company D"].map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Loved by Teams Everywhere
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our customers have to say about their experience
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                content: "This platform has completely transformed how we work. Our productivity increased by 300% in just 3 months.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "CTO, DataFlow",
                content: "The AI capabilities are incredible. We've automated tasks that used to take hours into minutes.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Product Manager, GrowthCo",
                content: "Best investment we've made this year. The ROI was evident within the first month.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help your team work smarter, not harder
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance that keeps up with your fastest workflows"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA"
              },
              {
                icon: BarChart,
                title: "Advanced Analytics",
                description: "Real-time insights and reporting to track what matters most"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Work together seamlessly with real-time sync and comments"
              },
              {
                icon: Globe,
                title: "Global Scale",
                description: "Deployed across 50+ countries with 99.99% uptime SLA"
              },
              {
                icon: CheckCircle,
                title: "Easy Integration",
                description: "Connect with 100+ tools you already use in minutes"
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-2 hover:border-emerald-500 transition-colors">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-emerald-600 mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your workflow
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Sign Up",
                description: "Create your account in seconds with just your email. No credit card required."
              },
              {
                step: "02",
                title: "Customize",
                description: "Tailor the platform to your needs with our intuitive setup wizard and templates."
              },
              {
                step: "03",
                title: "Launch",
                description: "Invite your team and start collaborating immediately with full support."
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600 text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-emerald-200">
                    <ArrowRight className="absolute -right-2 -top-3 h-6 w-6 text-emerald-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your team
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                description: "Perfect for small teams getting started",
                features: [
                  "Up to 5 team members",
                  "10 GB storage",
                  "Basic analytics",
                  "Email support",
                  "Core integrations"
                ],
                popular: false
              },
              {
                name: "Professional",
                price: "$99",
                description: "For growing teams that need more",
                features: [
                  "Up to 25 team members",
                  "100 GB storage",
                  "Advanced analytics",
                  "Priority support",
                  "All integrations",
                  "Custom workflows",
                  "API access"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For organizations at scale",
                features: [
                  "Unlimited team members",
                  "Unlimited storage",
                  "Custom analytics",
                  "24/7 dedicated support",
                  "All integrations",
                  "Advanced security",
                  "SLA guarantee",
                  "Custom contracts"
                ],
                popular: false
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.popular ? 'border-emerald-600 border-2 shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-emerald-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg">
                    {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our platform
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How does the free trial work?",
                answer: "Our 14-day free trial gives you full access to all Professional plan features. No credit card required. You can cancel anytime during the trial period with no charges."
              },
              {
                question: "Can I change plans later?",
                answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and wire transfers for Enterprise plans."
              },
              {
                question: "Is my data secure?",
                answer: "Yes! We use bank-level 256-bit encryption, are SOC 2 Type II certified, and comply with GDPR and HIPAA. Your data is encrypted both in transit and at rest."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our service, contact us within 30 days of purchase for a full refund."
              },
              {
                question: "How does support work?",
                answer: "Starter plans get email support within 24 hours. Professional plans get priority support within 4 hours. Enterprise plans get 24/7 dedicated support with a direct line to our team."
              }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white px-6 rounded-lg border">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          <Card>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6 pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" size="lg" className="w-full">
                  Send Message <Mail className="ml-2 h-5 w-5" />
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2025 Your SaaS. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors" aria-label="X (Twitter)">
                <XIcon className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Globe className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
                <CheckCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
