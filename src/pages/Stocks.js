// Import Dependecies
import React from 'react';
import {Link} from "react-router-dom";

//Import Data
import stocks from '../components/stockdata'

const StocksPage = (props) => {
    return (
        <div className="stocks">
            {stocks.map((stock) => {
                const {name, symbol} = stock
                return (
                    <Link to={`/price/${symbol}`}>
                        <h2>{name}  -  {symbol}</h2>
                    </Link>
                );
                
            })}
        </div>
    );
};

export default StocksPage;