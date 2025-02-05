import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { Blog } from "@/types";

export const generateStaticParams = async() =>{

    const res = await fetch(`http://localhost:5001/blogs`);
    const blogs = await res.json();

    return blogs.slice(0,3).map((i: Blog)=> ({
        blogId: i.id
    }))
}


const BlogDetailsPage = async({params}: {params: Promise<{blogId: string}>} ) => {

    const {blogId}= await params;

    const res = await fetch(`http://localhost:5001/blogs/${blogId}`)
      const blog = await res.json()
   

    return (
        <div>
           <BlogDetailsCard blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;