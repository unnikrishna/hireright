import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

function CountryDetails() {
    const navigate = useNavigate();

const selectedCountry = useSelector(state =>state.countryDetails.selectedCountry);
  return (
    <div>
      <h4>Selected Country</h4>
      <div className="flex flex-col gap-4 border-[2px] p-2 cursor-pointer">
        <div>
          <span>Name:</span>
          <span>{selectedCountry.name.common}</span>
        </div>
        <div>
          <span>Official Name:</span>
          <span>{selectedCountry.name.official}</span>
        </div>
        <div>
          <span>Flag:</span>
          <img
            className="w-[30px]"
            src={selectedCountry?.flags?.png}
            alt={`${selectedCountry.name.common}_flag`}
          />
        </div>
        <div>
          <span>Capital:</span>
          <span>{selectedCountry.capital.join(" ,")}</span>
        </div>
        <div>
          <span>Languages:</span>
          {Object.keys(selectedCountry.languages).map((item) => {
            return <span>{selectedCountry.languages[item]}</span>;
          })}
        </div>
      </div>
      <button className='p-2 bg-blue-300 mt-2 ' onClick={()=>navigate('/countries')}>Goback</button>
    </div>
  );
}

export default CountryDetails