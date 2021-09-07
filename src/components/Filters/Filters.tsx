import React from "react";
import ModalContainer from "../Modal";

import Filter, { IFilter } from './Filter';

function Filters() {
  let filtres: IFilter[] = [
    { name: "Piscine", criteriaType: "boolean" },
    { name: "Chambres", criteriaType: "int" },
  ];

  return (
    <>
      <ModalContainer Title="Nos filtres" Button="Filtres">
        <div tw="grid grid-cols-2 grid-rows-2 gap-0	">
          {filtres.map((filtre) => (
            <Filter filter={filtre} />
          ))}
        </div>
      </ModalContainer>
    </>
  );
}

export default Filters;
