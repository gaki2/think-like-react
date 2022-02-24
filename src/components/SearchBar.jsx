export default function SearchBar({
  filterText,
  inStockOnly,
  handleFilterTextChange,
  handleInStockChange,
}) {
  const onChangeFilterText = (e) => {
    handleFilterTextChange(e.target.value);
  };

  const onChangeInStockChange = (e) => {
    handleInStockChange(e.target.checked);
  };

  return (
    <form>
      <input
        placeholder="Search ..."
        onChange={(e) => onChangeFilterText(e)}
        value={filterText}
      ></input>
      <p>
        <input
          checked={inStockOnly}
          type="checkbox"
          onChange={(e) => onChangeInStockChange(e)}
        ></input>{" "}
        Only Show Products in stock
      </p>
    </form>
  );
}
