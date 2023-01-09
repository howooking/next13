import Link from "next/link";
import { getPostMetadata } from "../components/getPostMetadata";
import { PostMetadata } from "../components/postMetadata";

export default function Home(): JSX.Element {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post: PostMetadata) => (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </div>
  ));
  return <div>{postPreview}</div>;
}
