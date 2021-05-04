import Head from "next/head";
import SearchBar from "../components/SearchBar";
import BitcoinsList from "../components/BitcoinsList";
import Layout from "../components/Layout";

export default function Home({filteredBitcoins}) {
  //console.log(filteredBitcoins)
  return (
    <Layout>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar type="text" placeholder="Search" />
      <BitcoinsList filteredBitcoins={filteredBitcoins}/>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false"
  );

  const filteredBitcoins = await res.json();
  return {
    props: {
      filteredBitcoins,
    },
  };
};
