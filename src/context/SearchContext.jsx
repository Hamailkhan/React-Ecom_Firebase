import { createContext, useState } from "react";

export const SearchData = createContext();

const SearchContext = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchData.Provider value={{ search, setSearch }}>
      {children}
    </SearchData.Provider>
  );
};

export default SearchContext;
