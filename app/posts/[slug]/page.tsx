import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Link from "next/link";
import { getPostMetadata } from "../../../components/getPostMetadata";

const getPostContent = (slug: string): typeof matterResult => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  const slugs = posts.map((post) => {
    return { slug: post.slug };
  });
  return slugs;
};

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default function PostPage(props: PostPageProps) {
  const { slug } = props.params;
  const post = getPostContent(slug);
  return (
    <div>
      <h1>{post.data.title}</h1>
      <p>{post.data.subtitle}</p>
      <p>{post.data.date}</p>
      <Markdown>{post.content}</Markdown>
    </div>
  );
}
