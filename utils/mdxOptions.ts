
import { readingTime } from "reading-time-estimator";
import rehypePrettyCode from "rehype-pretty-code";
import { MDXRemoteOptions } from "next-mdx-remote-client/rsc";

export const getMdxOptions = (source: string): MDXRemoteOptions => {

  return {
    parseFrontmatter: true,
    scope: {
      readingTime: readingTime(source, { wordsPerMinute: 100 }).text,
    },
    mdxOptions: {
      format: "mdx",
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: "github-dark-default",
            keepBackground: true,
            bypassInlineCode: true,
          },
        ],
      ],
    },
  };

}