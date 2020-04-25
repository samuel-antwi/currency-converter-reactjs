import React, { useState, createContext } from 'react';

export const DataContext = createContext();

const DataContextProvider = props => {
  const [showPound, setShowPound] = useState(true);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('GBP');
  const [amount, setAmount] = useState('');
  const [ results, setResults ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const [error, setError] = useState(false)

  return (
    <DataContext.Provider
      value={{
        error,
        setError,
        loading,
        setLoading,
        showPound,
        setShowPound,
        from,
        setFrom,
        to,
        setTo,
        amount,
        setAmount,
        results,
        setResults
      }}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataContextProvider;
