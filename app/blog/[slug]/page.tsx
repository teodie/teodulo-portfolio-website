import { evaluate, MDXRemote, MDXRemoteOptions } from 'next-mdx-remote-client/rsc';
import { getPostMap, getSourceSync } from '@/utils/file';
import { getMdxOptions } from '@/utils/mdxOptions';

type PageProps = {
  params: Promise<{ slug: string }>;
}

// TODO openGraph
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params;

//   return {
//     title: "My Hello World Post",
//     openGraph: {
//       title: "My Hello World Post",
//       description: "A deep dive into my first MDX blog.",
//       url: `https://myblog.com{slug}`,
//       siteName: "My Tech Blog",
//       images: [
//         {
//           url: "https://myblog.com", // The image people see on social media
//           width: 1200,
//           height: 630,
//         },
//       ],
//       locale: "en_US",
//       type: "article",
//     },
//   };
// }

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

  console.log(mdxFile)
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