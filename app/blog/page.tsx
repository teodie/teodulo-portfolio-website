import type { Metadata } from "next";


import Image from 'next/image'
import { getAllFrontmatterWithFilename } from "@/utils/file"

export const metadata: Metadata = {
  title: "Teodie Blogs",
};

const BlogPage = () => {

  const frontMatterList = getAllFrontmatterWithFilename();

  return (
    <section className='pt-20 grid grid-cols-5 gap-4 max-w-400 mx-auto px-10 [&>*:nth-child(2)]:col-span-3 [&>*:nth-child(2)]:row-span-2'>

      <h1 className="text-5xl font-bold col-span-full self-start text-center my-5">Latest Writings</h1>

      {
        frontMatterList?.map((blog, index) => (
          <a href={`/blog/${blog.slug}`} key={index} >
            <div className="relative overflow-hidden rounded-3xl h-100">
              <Image src={`/blog/${blog.filename}/thumbnail.png`} alt={`${blog.filename} thumbnail`} fill className="object-cover "/>
            </div>
            <h3 className="text-2xl mt-2">{blog.front_matter_title}</h3>
          </a>
        ))
      }


    </section>
  )
}

export default BlogPage