'use client'

import * as React from 'react'
import { UserButton, OrganizationSwitcher } from '@clerk/nextjs'

const Nav: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-background">
      <h1 className="text-2xl font-bold tracking-tight">Bloggie</h1>
      <div className="flex gap-4 items-center">
        <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" />
        <UserButton />
      </div>
    </nav>
  )
}

export default Nav;