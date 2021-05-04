import Layout from '../../components/Layout';
import styles from './Bitcoin.module.css';

const Bitcoin = ({ bitcoin }) => {
  return (
    <Layout>
      <div className={styles.bitcoin_page}>
        <div className={styles.bitcoin_container}>
          <img
            src={bitcoin.image.large}
            alt={bitcoin.name}
            className={styles.bitcoin_image}
          />
          <h1 className={styles.bitcoin_name}>{bitcoin.name}</h1>
          <p className={styles.bitcoin_ticker}>{bitcoin.symbol}</p>
          <p className={styles.bitcoin_current}>
            {bitcoin.market_data.current_price.usd}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Bitcoin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

  const data = await res.json();

  return {
    props: {
      bitcoin: data
    }
  };
}