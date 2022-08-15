import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCities } from "../api/cities";
import CityTable from "../Components/CityTable";
import Pagination from "../Components/Pagination";
import { getPage, getSort } from "../utils/utils";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initPage = getPage(searchParams.get("page"));
  const initSort = getSort(searchParams.get("sortOrder"));
  const [page, setPage] = useState(initPage);
  const [sortByPopulation, setSortByPopulation] = useState(initSort);
  useEffect(() => {
    setLoading(true);
    getCities({
      sortByPopulation,
      page
    })
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [sortByPopulation, page]);

  useEffect(() => {
    setSearchParams({
      page,
      sortByPopulation
    });
  }, [page, sortByPopulation, setSearchParams]);
  // if (loading) {
  //   return <h4>Loading</h4>;
  // }
  const isAscending = sortByPopulation === "ASC";
  return (
    <div>
      <div>
        <button
          onClick={() => setSortByPopulation(isAscending ? "DESC" : "ASC")}
        >
          SHOW IN {isAscending ? "DESC" : "ASC"}{" "}
        </button>
      </div>
      <Pagination current={page} onChange={(page) => setPage(page)} />
      {loading ? <h4>Loading</h4> : <CityTable data={data} />}
    </div>
  );
}
export default HomePage;
