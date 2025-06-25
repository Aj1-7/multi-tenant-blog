"use client"

import Nav from "@/app/components/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { createBlog } from "./actions";
import { useOrganization } from "@clerk/nextjs";

export default function OrgLandingPage() {
  const [blogContent, setBlogContent] = React.useState("");
  const [blogTitle, setBlogTitle] = React.useState("");
  const selectedOrg = useOrganization();

  const handleCreateBlog = async () => {
    if (!selectedOrg.organization?.id) return;
    await createBlog({
      title: blogTitle,
      body: blogContent.trim(),
      orgId: selectedOrg.organization?.id,
    });
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-background">
      <Nav />
      <div className="w-full max-w-md mt-12 bg-card border border-border rounded-xl shadow-sm p-8 flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-foreground mb-2 text-center">Create a Blog Post</h2>
        <Input
          className=""
          placeholder="Blog Title"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
        />
        <Textarea
          className="min-h-[120px] resize-none"
          placeholder="Write your blog content here..."
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
        />
        <Button onClick={handleCreateBlog} className="w-full mt-2">
          Create a blog
        </Button>
      </div>
    </main>
  );
}