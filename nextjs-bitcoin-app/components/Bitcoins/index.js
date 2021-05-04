
const Bitcoins = ({name,price,symbol,marketcap,volume,image,priceChange,id}) => {
    return (
        <div className="bitcoin_container">
            <div className="bitcoin_row">
                <div className="bitcoin">
                    <img src={image} alt={name}
                    className="bitcoin_img"/>
                    <h1 className="bitcoin_h1">{name}</h1>
                    <p className="bitcoin_symbol">{symbol}</p>
                </div>
            </div>
        </div>
    )
}

export default Bitcoins;
