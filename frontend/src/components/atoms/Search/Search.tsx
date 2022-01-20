import React from "react";

const Search = (): React.ReactElement => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <label className="mt-10">
      <input
        className={`w-full input-placeholder-font-weight autofill-bg-white text-xl bg-white p-2 border-8 
        border-black font-black focus:outline-none focus-visible:outline-none `}
        type="text"
        placeholder="Szukaj"
        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchValue(event.target.value);
          console.log(searchValue);
        }}
      />
    </label>
  );
};

export default Search;
