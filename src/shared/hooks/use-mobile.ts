// src/shared/hooks/use-mobile.ts
'use client'

import { useEffect, useState } from 'react'

/**
 * useIsMobile
 * Devuelve true si la pantalla es menor que el breakpoint "md" de Tailwind (768px por defecto).
 * Es simple, SSR-safe (devuelve false en servidor) y reacciona a cambios de tamaño.
 */

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => {
    // En SSR no hay window: asumimos desktop (false) hasta que se monte.
    if (typeof window === 'undefined') return false
    return window.innerWidth < breakpoint
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handler = () => setIsMobile(window.innerWidth < breakpoint)

    // escucha resize
    window.addEventListener('resize', handler)
    // y comprobar al inicio
    handler()

    return () => window.removeEventListener('resize', handler)
  }, [breakpoint])

  return isMobile
}
