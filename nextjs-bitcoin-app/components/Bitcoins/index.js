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
    <div className="bitcoin_container">
      <div className="bitcoin_row">
        <div className="bitcoin">
          <img src={image} alt={name} className="bitcoin_img" />
          <h1 className="bitcoin_h1">{name}</h1>
          <p className="bitcoin_symbol">{symbol}</p>
        </div>
        <div className="bitcoin_data">
            <p className="bitcoin_price">${price}</p>
            <p className="bitcoin_volume">${volume.toLocaleString()}</p>
            {priceChange < 0 ? (
                <p className="bitcoin_percent red">
                    {priceChange.toFixed(2)}%
                </p>
            ):(
                <p className="bitcoin_percent green">
                    {priceChange.toFixed(2)}%
                </p>
            )}
            <p className="bitcoin_market">
                Mkt Cap: ${marketcap.toLocaleString()} 
            </p>
        </div>
      </div>
    </div>
  );
};

export default Bitcoins;
