'use client'

import * as React from 'react'
import Link from 'next/link'
import { useIsMobile } from '@/src/shared/hooks/use-mobile'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/src/shared/components/ui/navigation-menu'

import type { NavigationSection } from '../types/navegation.types'

type NavigationMenuProps = {
  sections: NavigationSection[]
}
type MenuItemProps = {
  title: string
  href: string
  description?: string
  icon?: React.ReactNode
}

function MenuItem({
  title,
  href,
  description,
  icon,
}: MenuItemProps) {
  return (
    <li >
      <NavigationMenuLink asChild className=''>
        <Link
          href={href}
          className="group block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon}
            {title}
          </div>

          {description && (
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {description}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export function NavigationMenuMain({ sections }: NavigationMenuProps) {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu className='' viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        {sections.map((section) => (
          <NavigationMenuItem
            key={section.label}
            className={section.hiddenOnMobile ? 'hidden md:block' : ''}
          >
            {section.links.length > 1 ? (
              <>
                <NavigationMenuTrigger className='bg-trasparent text-4xs bg-white rounded-4xl border border-black'>
                  {section.label}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid gap-2 w-[200px] md:w-[250px]">
                    {section.links.map((link) => (
                      <MenuItem key={link.href} {...link} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={section.links[0].href}>
                  {section.label}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
