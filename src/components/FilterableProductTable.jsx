import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { products } from "../product";
import { useState } from "react";

export default function FilterableProductTable() {
  const [filter, setFilter] = useState({
    filterText: "",
    inStockOnly: false,
  });

  const handleFilterTextChange = (filterText) => {
    console.log(filterText);
    setFilter({
      ...filter,
      filterText: filterText,
    });
  };
  const handleInStockChange = (inStockOnly) => {
    setFilter({
      ...filter,
      inStockOnly: inStockOnly,
    });
  };

  return (
    <>
      <SearchBar
        filterText={filter.filterText}
        inStockOnly={filter.inStockOnly}
        handleFilterTextChange={handleFilterTextChange}
        handleInStockChange={handleInStockChange}
      ></SearchBar>
      <ProductTable
        products={products}
        filterText={filter.filterText}
        inStockOnly={filter.inStockOnly}
      ></ProductTable>
    </>
  );
}
