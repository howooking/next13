import { getPostMetadata } from "../components/getPostMetadata";
import { PostMetadata } from "../components/postMetadata";
import PostPreview from "../components/PostPreview";

export default function Home(): JSX.Element {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post: PostMetadata) => (
    <PostPreview key={post.slug} post={post} />
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{postPreview}</div>
  );
}
