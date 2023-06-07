import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); //removes the file extension

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  // read content of a file
  const fileContent = fs.readFileSync(filePath, "utf-8");

  //   pass the fileContent to the matter, and matter will return an object with two properties, DATA PROPERTY- for the metadata as a JS object and a CONTENT PROPERTY
  //   which contains the actual content - as a string
  const { data, content } = matter(fileContent);

  //   prepare our own postData Object
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles(); //will return an array of strings - file names
  //   go through all thos post files and dive into them to extract metadata and markdown content - also derive a slug(file name without the extension)

  //   map returns a new array
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  //   sort to display the most recent posts first
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((posts) => posts.isFeatured);

  return featuredPosts;
}
