import fs from 'fs'
import path from 'path'
import { getFrontmatter } from "next-mdx-remote-client/utils";
import { Frontmatter, PostMap } from '@/types';
import { MDXFOLDER } from '@/constants';
import { readingTime, ReadingTime } from 'reading-time-estimator';


export const getSourceSync = (mdxFilename: string) => {
  console.log({ mdxFilename })
  const mdxFullPath = path.join(process.cwd(), MDXFOLDER, mdxFilename)

  return fs.readFileSync(mdxFullPath, "utf8");
};

export const getMdxFileList = () => {
  const mdxFolder = path.join(process.cwd(), MDXFOLDER)

  if (!fs.existsSync(mdxFolder)) {
    console.log(`Mdx folder: ${mdxFolder} don't exist!`)
    return
  }

  const mdxFileList = fs.readdirSync(mdxFolder)
  return mdxFileList
}

export const getAllFrontmatterWithFilename = () => {
  const mdxFiles = getMdxFileList()
  const fnList: Frontmatter[] = []

  mdxFiles?.map((mdxFilename) => {
    const mdxFilePath = path.join(process.cwd(), MDXFOLDER, mdxFilename)

    const source = fs.readFileSync(mdxFilePath, "utf-8")
    const readingTimeInText = readingTime(source, { wordsPerMinute: 100 }).text

    const frontmatter = getFrontmatter<Frontmatter>(source).frontmatter

    fnList.push({ ...frontmatter, filename: mdxFilename.replace(/\.mdx?$/, ""), reading_time: readingTimeInText })
  })

  return fnList
}

export const getFrontMatter = (source: string) => {

  const fmatter = getFrontmatter<Frontmatter>(source).frontmatter

  return fmatter
}

export const getPostMap = async () => {
  const mdxFileList = getMdxFileList()
  const postMap: PostMap = {}

  mdxFileList?.forEach((mdxfile) => {
    const source = getSourceSync(mdxfile)

    const frontmatter = getFrontmatter<Frontmatter>(source).frontmatter

    if (!frontmatter.slug) throw new Error(`🚨 BUILD FAILED: The file "${mdxfile}" is missing a 'slug' in its frontmatter. Please add one to continue.`)

    postMap[frontmatter.slug] = mdxfile;
  })

  return postMap

}