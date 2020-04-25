import React, { useContext } from "react";
import pound from "./img/pound.jpg";
import { DataContext } from "../context/DataContext";

const Form = ({ rate }) => {
  const {
    error,
    setError,
    setResults,
    from,
    setFrom,
    to,
    setTo,
    amount,
    setAmount,
    showPound,
    setShowPound,
    setLoading,
  } = useContext(DataContext);

  const handleChange = (e) => {
    setAmount(e.target.value);
    setResults(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      setResults(true);
      setShowPound(false);
      setLoading(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  const handleSwap = (e) => {
    e.preventDefault();
    setFrom(to);
    setTo(from);
  };
  return (
    <div>
      <div>
        <div className="container text-center">
          <h1 className="app-header ">Currency Converter</h1>
          <p className="mt-2 base-rate">
            <span className="base-rate-text">Current Rate:</span> 1 {from} ={" "}
            {rate} {to}
          </p>
          {showPound && (
            <img
              src={pound}
              alt="pounds"
              style={{ width: "100px", borderRadius: "50px" }}
              className="mt-2"
            />
          )}
        </div>
        <form onSubmit={handleSubmit} className="form-group">
          <div className="form-group">
            <label>Amount</label>
            <input
              onChange={handleChange}
              value={amount}
              id="amount"
              placeholder="Enter Amount"
              type="number"
              className="form-control"
            />
            {error && <p className="error mt-2">Input field required</p>}
          </div>
          <div className="form-group">
            <label>From</label>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="form-control"
              id="from"
              name="from"
            >
              <option value="GBP">GBP - Pound Sterling</option>
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - European Euro</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar </option>
              <option value="CNY">CNY - Chinese Renminbi</option>
              <option value="AED">AED - UAE Dirham</option>
              <option value="ARS">ARS - Argentine Peso</option>
              <option value="BGN">BGN - Bulgarian Lev </option>
              <option value="BRL">BRL - Brazilian Real </option>
              <option value="BSD">BSD - Bahamian Dollar</option>
              <option value="CHF">CHF - Swiss Franc </option>
              <option value="CLP">CLP - Chilean Peso </option>
              <option value="COP">COP - Colombian Peso</option>
              <option value="CZK">CZK - Czech Koruna</option>
              <option value="DKK">DKK - Danish Krone</option>
              <option value="DOP">DOP - Dominican Peso</option>
              <option value="EGP">EGP - Egyptian Pound </option>
              <option value="FJD">FJD - Fiji Dollar </option>
              <option value="GTQ">GTQ - Guatemalan Quetzal</option>
              <option value="HKD">HKD - Hong Kong Dollar</option>
              <option value="HRK">HRK - Croatian Kuna </option>
              <option value="HUF">HUF - Hungarian Forint </option>
              <option value="IDR">IDR - Indonesian Rupiah</option>
              <option value="ILS">ILS - Israeli Shekel</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="ISK">ISK - Icelandic Krona </option>
              <option value="JPY">JPY - Japanese Yen </option>
              <option value="KRW">KRW - South Korean Won</option>
              <option value="KZT">KZT - Kazakhstani Tenge </option>
              <option value="MXN">MXN - Mexican Peso</option>
              <option value="MXN">MXN - Mexican Peso</option>
              <option value="NOK">NOK - Norwegian Krone </option>
              <option value="NZD">NZD - New Zealand Dollar</option>
              <option value="PAB">PAB - Panamanian Balboa </option>
              <option value="PEN">PEN - Peruvian Nuevo Sol</option>
              <option value="PHP">PHP - Philippine Peso </option>
              <option value="PKR">PKR - Pakistani Rupee</option>
              <option value="PLN">PLN - Polish Zloty </option>
              <option value="PYG">PYG - Paraguayan Guarani </option>
              <option value="RON">RON - Romanian Leu</option>
              <option value="RUB">RUB - Russian Ruble </option>
              <option value="SAR">SAR - Saudi Riyal </option>
              <option value="SEK">SEK - Swedish Krona </option>
              <option value="SGD">SGD - Singapore Dollar</option>
              <option value="THB">THB - Thai Baht </option>
              <option value="TRY">TRY - Turkish Lira </option>
              <option value="TWD">TWD - New Taiwan Dollar </option>
              <option value="UAH">UAH - Ukrainian Hryvnia</option>
              <option value="UYU">UYU - Uruguayan Peso</option>
              <option value="ZAR">ZAR - South African Rand</option>
            </select>
            <button onClick={handleSwap} className="btn-swap mt-3">
              <i className="fas fa-arrows-alt-v"></i>
            </button>
          </div>

          <label>To</label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="form-control"
            id="to"
            name="to"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="GBP">GBP - Pound Sterling</option>
            <option value="EUR">EUR - European Euro</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar </option>
            <option value="CNY">CNY - Chinese Renminbi</option>
            <option value="AED">AED - UAE Dirham</option>
            <option value="ARS">ARS - Argentine Peso</option>
            <option value="BGN">BGN - Bulgarian Lev </option>
            <option value="BRL">BRL - Brazilian Real </option>
            <option value="BSD">BSD - Bahamian Dollar</option>
            <option value="CHF">CHF - Swiss Franc </option>
            <option value="CLP">CLP - Chilean Peso </option>
            <option value="COP">COP - Colombian Peso</option>
            <option value="CZK">CZK - Czech Koruna</option>
            <option value="DKK">DKK - Danish Krone</option>
            <option value="DOP">DOP - Dominican Peso</option>
            <option value="EGP">EGP - Egyptian Pound </option>
            <option value="FJD">FJD - Fiji Dollar </option>
            <option value="GTQ">GTQ - Guatemalan Quetzal</option>
            <option value="HKD">HKD - Hong Kong Dollar</option>
            <option value="HRK">HRK - Croatian Kuna </option>
            <option value="HUF">HUF - Hungarian Forint </option>
            <option value="IDR">IDR - Indonesian Rupiah</option>
            <option value="ILS">ILS - Israeli Shekel</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="ISK">ISK - Icelandic Krona </option>
            <option value="JPY">JPY - Japanese Yen </option>
            <option value="KRW">KRW - South Korean Won</option>
            <option value="KZT">KZT - Kazakhstani Tenge </option>
            <option value="MXN">MXN - Mexican Peso</option>
            <option value="MXN">MXN - Mexican Peso</option>
            <option value="NOK">NOK - Norwegian Krone </option>
            <option value="NZD">NZD - New Zealand Dollar</option>
            <option value="PAB">PAB - Panamanian Balboa </option>
            <option value="PEN">PEN - Peruvian Nuevo Sol</option>
            <option value="PHP">PHP - Philippine Peso </option>
            <option value="PKR">PKR - Pakistani Rupee</option>
            <option value="PLN">PLN - Polish Zloty </option>
            <option value="PYG">PYG - Paraguayan Guarani </option>
            <option value="RON">RON - Romanian Leu</option>
            <option value="RUB">RUB - Russian Ruble </option>
            <option value="SAR">SAR - Saudi Riyal </option>
            <option value="SEK">SEK - Swedish Krona </option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="THB">THB - Thai Baht </option>
            <option value="TRY">TRY - Turkish Lira </option>
            <option value="TWD">TWD - New Taiwan Dollar </option>
            <option value="UAH">UAH - Ukrainian Hryvnia</option>
            <option value="UYU">UYU - Uruguayan Peso</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
          <input type="submit" value="Calculate" className="btn-submit mt-3" />
        </form>
      </div>
    </div>
  );
};

export default Form;
