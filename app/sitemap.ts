import { getMdxFileList } from '@/utils/file'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://teodulo.website'
  const blogPostList = getMdxFileList()

  const heroMap = {
    url: baseUrl,
    lastModified: new Date(),
    priority: 1,
  }

  const blogMap = (blogPostList || []).map((mdxFilename) => {
    return {
      url: `${baseUrl}/${mdxFilename.replace(/\.mdx?$/, "")}`,
      priority: 0.8,
    }
  })

  return [
    heroMap,
    ...blogMap
  ]
}