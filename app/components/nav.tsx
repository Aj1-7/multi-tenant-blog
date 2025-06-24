'use client'

import * as React from 'react'
import {UserButton,OrganizationSwitcher} from '@clerk/nextjs'

const Nav : React.FC = () => {
    return (<nav className = "p-4 flex items-center justify-between">
        <div>
            <h1 className='text-2xl font-semibold'>Bloggie</h1>
        </div>
        <div className='flex gap-4 items-center justify-center'>
            <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" />
            <UserButton/>
        </div>
        </nav>
    )
}

export default Nav;