import { getBlogs } from '@/lib/db-blog';
import Blogs_68 from '@/components/demo/blog_68/Blogs_68.js';

export default async function P3Page_68() {
  const blogs = await getBlogs();
  console.log('blogs', JSON.stringify(blogs));
  return (
    <>
      <Blogs_68 blogs={blogs} />
    </>
  );
}
