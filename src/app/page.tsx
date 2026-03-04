'use client'
import Image from "next/image";
import Content from "@/src/blog/test-blog.mdx"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <Content />
    </div>
  );
}
