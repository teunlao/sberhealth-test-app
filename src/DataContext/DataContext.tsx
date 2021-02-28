import React, { createContext, useState, useContext } from 'react';

export interface FormProperties {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  index: string;
  address: string;
  date: string;
  isDelivery: string;
}

export type DispatchFormData = {
  formData: FormProperties;
  setFormData: (value: FormProperties | Record<string & boolean, string>) => void;
};

const DataContext = createContext({});

const DataProvider: React.FC = ({ children }) => {
  const [formData, setFormData] = useState({});

  const createNewFormData = (values: Record<string, string>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <DataContext.Provider value={{ formData, setFormData: createNewFormData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

export const useFormData = (): DispatchFormData => useContext(DataContext) as DispatchFormData;
