export default function ProductCaterogyRow(props) {
  const categoryName = props.category;
  return (
    <tr>
      <th colSpan="2">{categoryName}</th>
    </tr>
  );
}
