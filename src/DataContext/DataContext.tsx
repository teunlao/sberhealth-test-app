import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext({});

const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({});

  const setValues = (values: Record<string, string>) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return <DataContext.Provider value={{ data, setValues }}>{children}</DataContext.Provider>;
};

export default DataProvider;

export const useData = (): any => useContext(DataContext);
