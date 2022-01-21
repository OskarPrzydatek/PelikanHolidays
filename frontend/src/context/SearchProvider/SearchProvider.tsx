import React from "react";

type SearchProviderProps = {
  children: React.ReactNode;
};

type SearchContextType = {
  searchContent: string;
  setSearchContent: React.Dispatch<string> | undefined;
};

export const SearchContext = React.createContext<Partial<SearchContextType>>(
  {}
);

export default function SearchProvider({ children }: SearchProviderProps) {
  const [searchContent, setSearchContent] = React.useState("");

  return (
    <SearchContext.Provider
      value={{
        searchContent: searchContent,
        setSearchContent: setSearchContent,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
