import { useEffect } from 'react'
import { useLocation } from '@tanstack/react-router'

export function ScrollHandler() {
  const location = useLocation()

  useEffect(() => {
    // Check if URL has hash (e.g., /#services-section)
    const hash = location.hash

    if (hash) {
      // Remove the # from the hash to get the element ID
      const elementId = hash.replace('#', '')
      const element = document.getElementById(elementId)

      if (element) {
        // Small delay to ensure page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    } else {
      // No hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

  return null
}
