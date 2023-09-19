import axios from "axios";
import React, { useEffect, useState } from "react";
import Country from "./Country";
import Paginate from "./Paginate";
import { setCountries } from "../redux/countrySlice";
import { useSelector, useDispatch } from "react-redux";
function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector(state=> state.countryDetails?.countries)
  const [page, setPage] = useState({
    currentPage:1,
    totalCount:0,
    totalPage:0
  });

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(res=>{
      dispatch(setCountries(res.data));
      setPage(pre => {
        return {
          ...pre,
          totalCount: res.data.length,
          totalPage: parseInt(res.data.length / 10) + 1,
        };
      })
    });
  }, []);

  return (
    <div>
      <h1 className="text-[24px] text-blue-600 font-bold">Countries</h1>
      {countries
        .slice(page.currentPage * 10 - 10, page.currentPage * 10)
        .map((country) => {
          return <Country  key={country.name.common} data={country} />;
        })}
      <Paginate
        currentPage={page.currentPage}
        totalPage={page.totalPage}
        setPage={setPage}
      />
    </div>
  );
}

export default Countries;
