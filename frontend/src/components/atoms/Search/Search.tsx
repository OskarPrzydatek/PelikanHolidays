import React from "react";
import { SearchContext } from "@context/SearchProvider/SearchProvider";

const Search = (): React.ReactElement => {
  const { setSearchContent } = React.useContext(SearchContext);

  const handleSearchContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Find solution for that
    //@ts-ignore
    setSearchContent(event.target.value);
  }

  return (
    <label className="mt-10">
      <input
        className={`w-full input-placeholder-font-weight autofill-bg-white text-xl bg-white p-2 border-8 
        border-black font-black focus:outline-none focus-visible:outline-none `}
        type="text"
        placeholder="Szukaj Po Nazwie"
        onInput={handleSearchContent}
      /> 

      <style jsx>{`
        ::-webkit-input-placeholder {
          text-align: center;
        }

        :-moz-placeholder {
          text-align: center;
        }

        ::-moz-placeholder {
          text-align: center;
        }

        :-ms-input-placeholder {
          text-align: center;
        }
      `}</style>
    </label>
  );
};

export default Search;
