"use client"

import Nav from "@/app/components/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleClientScriptLoad } from "next/script";
import * as React from "react";
import { createBlog } from "./actions";
import { useOrganization } from "@clerk/nextjs";

export default function OrgLandingPage(){

    const [blogContent, setBlogContent] = React.useState('')
    const [blogTitle, setBlogTitle] = React.useState('')
    const selectedOrg = useOrganization();

    const handleCreateBlog = async() => {
        if (!selectedOrg.organization?.id) return
        await createBlog({
            title: blogTitle,
            body: blogContent.trim(),
            orgId: selectedOrg.organization?.id,
        })
        }

    return(
        <main>
            <Nav/>
            <div className="p-10">
                <Input className = "mb-5" placeholder="Blog Title" 
                value={blogTitle} 
                onChange={(e) => setBlogTitle(e.target.value)} />
                
                <Textarea
                placeholder="Write your blog content here..."
                value={blogContent} 
                onChange={(e) => setBlogContent(e.target.value)} />

                <Button onClick = {handleCreateBlog} className="mt-4">Create a blog</Button>
            </div>
        </main>
    )
}