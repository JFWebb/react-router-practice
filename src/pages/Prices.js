import React from "react";

//Import Data
import stocks from '../components/stockdata'

const PricePage = (props) => {

    // grab current stock symbol from URL param
    const symbol = props.match.params.symbol
    console.log(symbol);

    // use stock symbol to select from out array 
    const stock = stocks.filter( ele => ele.symbol === symbol)[0];
    console.log(stock);

    // 

    return (
        <div>
            <h1>{stock.name} - {stock.symbol}</h1>
            <h2>Last Price: {stock.lastPrice}</h2>
            <h3>Change: {stock.change}</h3>
            <h4>High: {stock.high}</h4>
            <h4>Low: {stock.low}</h4>
            <h4>Open: {stock.open}</h4>

        </div>
    );
};


export default PricePage;