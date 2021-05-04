import {useState} from 'react';
import SearchBar from "../components/SearchBar";
import BitcoinsList from "../components/BitcoinsList";
import Layout from "../components/Layout";

export default function Home({filteredBitcoins}) {
  const [search, setSearch] = useState('')

  const allBitcoins = filteredBitcoins.filter(bitcoin =>
    bitcoin.name.toLowerCase().includes(search.toLowerCase()))
  //console.log(filteredBitcoins)
  const handleChange = e => {
    e.preventDefault()

    setSearch(e.target.value.toLowerCase())
  }
  return (
    <Layout>
      <div className="bitcoin_app">
      <SearchBar type="text" placeholder="Search" onChange={handleChange} />
      <BitcoinsList filteredBitcoins={allBitcoins}/>
      </div>
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
