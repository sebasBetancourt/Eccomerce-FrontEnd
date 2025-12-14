import type { Metadata } from "next"
import "../globals.css"
import { Header } from "@/src/shared/components/header"

export const metadata: Metadata = {
  title: "Eccomerce Arquitecture",
  description: "Tienda de Servicios y Productos Profesional",
  icons: {
    icon: "/logo.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />

        <main className="pt-[4.5rem]">{children}</main>
      </body>
    </html>
  )
}
