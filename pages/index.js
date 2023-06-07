// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });
import { Fragment } from "react";
// import Hero from "../components/home-page/hero";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 600,
  };
}

export default HomePage;
