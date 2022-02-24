import ProductCateroyRow from "./ProductCaterogyRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, filterText, inStockOnly }) {
  let lastCategory = null;
  const row = [];

  products.forEach((product) => {
    const regex = new RegExp(filterText, "gi");
    if (regex.test(product.name)) {
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        row.push(
          <ProductCateroyRow
            key={product.category}
            category={product.category}
          ></ProductCateroyRow>
        );
        lastCategory = product.category;
      }
      row.push(
        <ProductRow
          key={product.name}
          name={product.name}
          price={product.price}
        ></ProductRow>
      );
    }
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    </>
  );
}
