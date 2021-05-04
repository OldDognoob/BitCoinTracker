import styles from "./Bitcoins.module.css";
import Link from "next/link";

const Bitcoins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  return (
    <Link href="/bitcoin/[id]" as={`/bitcoin/${id}`}>
      <a>
        <div className={styles.bitcoin_container}>
          <div className={styles.bitcoin_row}>
            <div className={styles.bitcoin}>
              <img src={image} alt={name} className={styles.bitcoin_img} />
              <h1 className={styles.bitcoin_h1}>{name}</h1>
              <p className={styles.bitcoin_symbol}>{symbol}</p>
            </div>
            <div className={styles.bitcoin_data}>
              <p className={styles.bitcoin_price}>${price}</p>
              <p className={styles.bitcoin_volume}>
                ${volume.toLocaleString()}
              </p>
              {priceChange < 0 ? (
                <p className={(styles.bitcoin_percent, styles.red)}>
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.bitcoin_percent, styles.green)}>
                  {priceChange.toFixed(2)}%
                </p>
              )}
              <p className={styles.bitcoin_marketcap}>
                Mkt Cap: ${marketcap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Bitcoins;
