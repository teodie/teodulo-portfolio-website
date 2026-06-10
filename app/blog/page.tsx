import type { Metadata } from "next";


import Image from 'next/image'
import { getAllFrontmatterWithFilename } from "@/utils/file"

export const metadata: Metadata = {
  title: "Teodie Blogs",
};

const BlogPage = () => {

  const frontMatterList = getAllFrontmatterWithFilename();

  return (
    <section className='pt-20  max-w-400 mx-auto px-10'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <h1 className="text-5xl mt-5 mb-10 font-bold text-center col-span-full ">Latest Writings</h1>
        {
          frontMatterList?.map((blog, index) => (
            <a
              href={`/blog/${blog.slug}`} key={index}
              className="
              inline-block
              mb-7
              "
            >
              <div className="relative overflow-hidden rounded-md lg:rounded-xl h-40  lg:h-60">
                <Image src={`/blog/${blog.filename}/thumbnail.png`} alt={`${blog.filename} thumbnail`} fill className="object-cover object-left" />
              </div>
              <h3 className="text-2xl mt-2">{blog.front_matter_title}</h3>
            </a>
          ))
        }
      </div>



    </section>
  )
}

export default BlogPage