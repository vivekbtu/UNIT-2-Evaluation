import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getCitiesByCountryName } from "../api/cities";
import CityTable from "../Components/CityTable";
import { getPage, getSort } from "../utils/utils";

function CountriesList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    getCitiesByCountryName({
      countryName: params.name
    })
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [params.name]);

  console.log(data);
  return (
    <div>
      {params.name}
      <div>
        <button onClick={() => navigate(-1)}> Go back </button>
      </div>
      {loading ? <h4>Loading</h4> : <CityTable data={data} />}
    </div>
  );
}

export default CountriesList;
