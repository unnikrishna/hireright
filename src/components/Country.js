import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setSelectedCountries } from '../redux/countrySlice';

function Country({data}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSlectedCountry = (data) => {
      dispatch(setSelectedCountries(data));
      navigate("/country")
    };

  return (
    <div
      onClick={() => handleSlectedCountry(data)}
      className="flex gap-4 border-[2px] p-2 cursor-pointer"
    >
      <img
        className="w-[30px]"
        src={data?.flags?.png}
        alt={`${data.name.common}_flag`}
      />
      <span>{data.name.common}</span>
    </div>
  );
}

export default Country