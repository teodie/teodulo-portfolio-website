export type Frontmatter = {
  front_matter_title: string;
  author: string;
  date: Date;
  summary: string;
  slug: string
  tags: string[] | undefined
  filename: string
};

export type PostMap = Record<string, string>

export type Scope = {
  readingTime: string;
  props?: {
    foo: string;
  };
};