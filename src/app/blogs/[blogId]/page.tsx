import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

const BlogDetailsPage = async({params}: {params: Promise<{blogId: string}>} ) => {

    const res = await fetch(`http://localhost:5001/blogs/${(await params).blogId}`)
      const blog = await res.json()
     console.log(blog);

    return (
        <div>
           <BlogDetailsCard blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;