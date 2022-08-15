import CityRow from "./CityRow";

function CityTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Population</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <CityRow
            key={item.id}
            name={item.name}
            id={item.id}
            population={item.population}
            country={item.country}
          />
        ))}
      </tbody>
    </table>
  );
}
export default CityTable;
