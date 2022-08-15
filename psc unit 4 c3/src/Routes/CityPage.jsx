import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCityById } from "../api/cities";

function CityPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    getCityById(id)
      .then((res) => {
        setLoading(false);
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <h4>Loading</h4>;
  }

  if (!data.id) {
    return (
      <div>
        <h4>Something went wrong!</h4>
        <Link to="/">GO back to home Page </Link>
      </div>
    );
  }
  return (
    <div>
      <table>
        <tr>
          <th>Field Name</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>ID</td>
          <td>{data.id}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td>Population</td>
          <td>{data.population}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>{data.country}</td>
        </tr>
      </table>
    </div>
  );
}

export default CityPage;

// {
//   "name": "Ponce",
//   "population": 87718,
//   "country": "Martinique",
//   "id": "2"
// },
