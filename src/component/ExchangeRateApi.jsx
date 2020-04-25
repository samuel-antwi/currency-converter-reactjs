import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import Loading from "./Loading";
import axios from "axios";
import Form from "./Form";

const ExchangeRateApi = () => {
  const [exchangeRate, setExchangeRate] = useState({});
  const { from, to, amount, results, loading } = useContext(DataContext);

  useEffect(() => {
    axios
      .get(`https://api.exchangerate-api.com/v4/latest/${from}`)
      .then((res) => {
        setExchangeRate(res.data.rates);
      });
  }, [from, to]);

  const rate = (exchangeRate[to] * 1).toFixed(2);
  const calculatedRate = (rate * amount).toFixed(2);

  return (
    <div className="py-3">
      {loading ? <Loading /> : <Form rate={rate} />}
      <div className="container text-center leading">
        {results && (
          <p>
            {amount}
            <span className="base m-2">{from}</span> = {calculatedRate}
            <span className="base m-2"> {to}</span>
          </p>
        )}
      </div>
    </div>
  );
};
export default ExchangeRateApi;
