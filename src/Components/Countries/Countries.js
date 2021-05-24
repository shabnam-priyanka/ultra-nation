import React from "react";

const Countries = (props) => {
  const { name, flag, population, region } = props.country;
  const handleAddCountry = props.handleAddCountry;
  return (
    <div style={{ border: "5px solid orange", margin: "5px" }}>
      <h3>Country Name: {name} </h3>
      <img style={{ height: "150px" }} src={flag} alt="" />
      <h3>Country Population: {population} </h3>
      <h3>Region: {region} </h3>
      <button onClick={() => handleAddCountry(props.country)}>
        Country Added
      </button>
    </div>
  );
};

export default Countries;
