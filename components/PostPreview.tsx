import Link from "next/link";
import { PostMetadata } from "./postMetadata";

type PostPreviewProps = {
  post: PostMetadata;
};

export default function PostPreview({ post }: PostPreviewProps): JSX.Element {
  return (
    <div className="border border-slate-200 rounded-md shadow-sm bg-white p-4">
      <p className="text-sm text-slate-400">{post.date}</p>
      <Link href={`/posts/${post.slug}`}>
        <h2 className="text-violet-500 hover:underline  mb-4">{post.title}</h2>
      </Link>
      <p className="text-slate-700">{post.subtitle}</p>
    </div>
  );
}
