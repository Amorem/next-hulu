import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div className="">
      <Head>
        <title>Next Hulu</title>
        <meta name="description" content="Hulu-like with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const results = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.Trending.url
    }`
  ).then((res) => res.json());

  return {
    props: { results },
  };
}
