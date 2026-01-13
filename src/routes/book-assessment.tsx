import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/book-assessment')({
  beforeLoad: () => {
    throw redirect({
      to: '/',
      hash: 'services-section',
    })
  },
  component: () => null,
})
