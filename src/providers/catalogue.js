import { createContext, useState } from "react";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([
    { name: "Book", price: 20 },
    { name: "T-Shirt", price: 50 },
    { name: "Banana", price: 3 },
  ]);

  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };

  const removeToCatalogue = (item) => {
    const newCatalogue = catalogue.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );
    setCatalogue(newCatalogue);
  };
  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToCatalogue, removeToCatalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
