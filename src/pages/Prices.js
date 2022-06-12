import React from "react";

//Import Data
import stocks from '../components/stockdata'

const PricePage = (props) => {

    // grab current stock symbol from URL param
    const symbol = props.match.params.symbol
    console.log(symbol);

    // use stock symbol to select from out array 
    const stock = stocks.filter( ele => ele.symbol === symbol);
    console.log(stock);

    // 

    return (
        <div>
            <h1>{stock.name}</h1>
        </div>
    );
};

export default PricePage;