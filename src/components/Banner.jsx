import React from "react";
import Cards from "./Cards";

export default function Hero() {
  return (
    <section className="pt-28 px-6 bg-[#e9e2d9]">
      <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
        Get Hyped. Get Noticed. Get Results.
      </h1>
      <h3 className="text-xl font-bold leading-tight mt-3 mb-10 max-w-2xl">
        Klaar met gokken op content <br /> die niets oplevert?

      </h3>

      <Cards />
    </section>
  );
}
