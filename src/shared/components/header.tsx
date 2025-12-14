'use client'
import Link from "next/link"
import clsx from "clsx"
import { NavigationMenuMain } from "@/src/shared/components/menuNavegation"
import { useScrolled } from "@/src/shared/hooks/useScrolled"

export function Header() {
  const scrolled = useScrolled(10)

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full bg-orange-50 px-3 transition-all duration-300",
        scrolled
          ? "h-[4.5rem] border-b border-black shadow-sm"
          : "h-[3.5rem]"
      )}
    >
      <nav className="flex h-full w-full items-center justify-between">
        <NavigationMenuMain
          sections={[
            {
              label: "Compra Ahora",
              links: [{ title: "Inicio", href: "/" }],
            },
            {
              label: "Catálogo",
              links: [
                { title: "Productos", href: "/productos" },
                { title: "Servicios", href: "/servicios" },
              ],
            },
            {
              label: "Servicios",
              links: [{ title: "Inicio", href: "/" }],
            },
          ]}
        />

        <NavigationMenuMain
          sections={[
            {
              label: "Diseños",
              links: [{ title: "Inicio", href: "/" }],
            },
            { 
              label: 'Sobre Nosotros', 
              links: [ 
                { title: 'Productos', href: '/productos', description: 'Explora nuestros productos' }, 
                { title: 'Servicios', href: '/servicios', description: 'Lo que ofrecemos' }, 
              ], 
            },
            {
              label: "Contáctanos",
              links: [{ title: "Contacto", href: "/contacto" }],
            },
          ]}
        />
      </nav>

      <div className="pointer-events-none absolute inset-x-0 flex justify-center">
        <Link
          href="#"
          className="pointer-events-auto relative flex items-center justify-center w-full"
        >
          <span
            className={clsx(
              "absolute z-10 transition-all duration-300 ease-out font-medium tracking-tight pb-10",
              scrolled ? "opacity-0 scale-90" : "opacity-100 scale-100 text-sm"
            )}
          >
            CONSÍGUE EL 10% DE DESCUENTO EN NUESTROS PRODUCTOS
          </span>

          <img
            src="/logo.png"
            alt="Promoción"
            className={clsx(
              "absolute z-20 transition-all duration-300 ease-out pb-17",
              scrolled
                ? "opacity-100 scale-101 h-55 w-45"
                : "opacity-0 scale-90 h-5"
            )}
          />
        </Link>
      </div>
    </header>
  )
}
