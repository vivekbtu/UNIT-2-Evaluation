import { Link } from "react-router-dom";

function CityRow({ name, population, country, id }) {
  return (
    <tr>
      <td>
        <Link to={`/city/${id}`}>{id}</Link>{" "}
      </td>
      <td> {name} </td>
      <td> {population} </td>
      <td>
        <Link to={`/country/${country}`}>{country}</Link>
      </td>
    </tr>
  );
}

export default CityRow;
// {
//   "name": "Ponce",
//   "population": 87718,
//   "country": "Martinique",
//   "id": "2"
// },
