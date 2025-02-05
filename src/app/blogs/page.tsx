import BlogCard from '@/components/ui/BlogCard';
import { Blog } from '@/types';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {

    title: 'NexaBlog | Blogs'
}

const BlogPage = async() => {
    const res = await fetch("http://localhost:5001/blogs", {
        next: {
          revalidate: 30
        }
      })
      const blogs = await res.json()

    return (
        <div>
            <h1 className="text-3xl text-center my-5 font-bold">
        Explore all <span className="text-teal-600">Blogs</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>

      <div className=' grid grid-cols-3 gap-5 my-5' >
        {
            blogs.map((i: Blog )=> <BlogCard blog={i} key={i.id} /> )
        }
      </div>
        </div>
    );
};

export default BlogPage;