import { MDXRemote } from 'next-mdx-remote-client/rsc';
import { getPostMap, getSourceSync } from '@/utils/file';
import { getMdxOptions } from '@/utils/mdxOptions';
import { Metadata } from 'next/types';
import { getFrontMatter } from '@/utils/file';



type PageProps = {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const postMap = await getPostMap()
  const mdxFile = postMap[slug]
  const source = getSourceSync(mdxFile)
  const blog = getFrontMatter(source)

  console.log(mdxFile)
  const ogImage = `/blog/${mdxFile.replace(/\.mdx?$/, "")}/thumbnail.png`

  return {
    title: blog.front_matter_title,
    openGraph: {
      title: blog.front_matter_title,
      description: blog.summary,
      url: `https://myblog.com/${slug}`,
      siteName: "teodulo",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

export const generateStaticParmas = async () => {
  const postMap = await getPostMap()

  const keys = Object.keys(postMap).map((slug) => ({ slug: slug })
  )

  return keys
}

const Post = async ({ params }: PageProps) => {
  const { slug } = await params;
  const postMap = await getPostMap()
  const mdxFile = postMap[slug]

  const source = getSourceSync(mdxFile)
  const options = getMdxOptions(source)

  return (
    <article className='prose prose-slate lg:prose-xl dark:prose-invert mx-auto pt-20'>
      {
        source !== undefined &&
        <MDXRemote
          source={source}
          options={options}
        />
      }


    </article>
  )
}

export default Post