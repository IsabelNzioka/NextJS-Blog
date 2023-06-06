// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });
import { Fragment } from "react";
// import Hero from "../components/home-page/hero";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}

export default HomePage;

// 1/ Hero - present ourselves
// 2 featured posts
