import Button from "@atoms/Button/Button";
import Router from "next/router";
import React from "react";

export default function SomethingWrong() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="font-black text-center text-4xl md:text-6xl loading">
        Coś poszło nie tak :(
      </h1>
      <div className="w-1/2 md:w-1/4">
        <Button
          label="Powrót do strony glównej"
          onClickMethod={() => Router.push("/")}
        />
      </div>
    </div>
  );
}
