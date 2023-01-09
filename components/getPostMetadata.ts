import matter from "gray-matter";
import fs from "fs";

export const getPostMetadata = (): typeof posts => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  //get gray-matter data from each md file
  const posts = markdownPosts.map((fileName) => {
    const folder = "posts/";
    const fileContents = fs.readFileSync(`${folder}${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};
