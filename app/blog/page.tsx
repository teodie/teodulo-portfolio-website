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

      <div className='grid grid-cols-5 grid-rows-6 gap-4'>
        <h1 className="text-5xl mt-5 mb-10 font-bold col-span-full self-start text-center ">Latest Writings</h1>
        {
          frontMatterList?.map((blog, index) => (
            <a
              href={`/blog/${blog.slug}`} key={index}
              className="
              nth-2:col-span-3 nth-2:row-span-6
              nth-3:col-span-2 nth-3:row-span-3
              nth-4:col-span-2 nth-4:row-span-3
              "
            >
              <div className="relative overflow-hidden rounded-3xl h-full">
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