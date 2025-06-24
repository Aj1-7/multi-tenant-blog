import { clerkClient } from '@clerk/nextjs/server';
import { blogTable } from '@/db/schema';
import { db } from '@/db';
import { eq } from 'drizzle-orm';

import { Card, CardTitle, CardContent } from '@/components/ui/card';

interface Params {
  subdomain: string;
}

export default async function HomePage({ params }: { params: Promise<Params> }) {
  const { subdomain } = await params;
  const client = await clerkClient();
  const org = await client.organizations.getOrganization({ slug: subdomain });

  const orgID = org.id;
  const blogs = await db.select().from(blogTable).where(eq(blogTable.orgId, orgID));

  return (
    <div className="p-10">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        📝 {org.name} Blogs
      </h1>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Card key={blog.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <CardTitle className="text-xl font-semibold mb-2">{blog.title}</CardTitle>
              <p className="text-gray-700 text-sm">{blog.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
