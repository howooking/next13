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
      <div className="text-center my-12">
        <h1 className="font-semibold text-slate-600 text-2xl ">
          {post.data.title}
        </h1>
        <p className="text-sm text-slate-400 mt-2"> {post.data.date}</p>
      </div>
      <p className="text-slate-700">{post.data.subtitle}</p>
      <article className="prose md:prose-lg lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
