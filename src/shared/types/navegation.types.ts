export type NavigationLink = {
  title: string
  href: string
  description?: string
  icon?: React.ReactNode
}

export type NavigationSection = {
  label: string
  links: NavigationLink[]
  hiddenOnMobile?: boolean
}
