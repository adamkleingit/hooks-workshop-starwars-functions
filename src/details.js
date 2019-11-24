import React, { useState, useEffect } from "react";

export function Details(props) {
  const [details, setDetails] = useState(null);

  const fetchDetails = () => {
    setDetails(null);
    fetch(`https://swapi.co/api/people/${props.id}/`)
      .then(res => res.json())
      .then(setDetails);
  };

  useEffect(fetchDetails, [props.id]);

  return details ? (
    <div>
      <div>height: {details.height}</div>
      <div>mass: {details.mass}</div>
      <div>hair color: {details.hair_color}</div>
      <div>skin color: {details.skin_color}</div>
      <div>eye color: {details.eye_color}</div>
    </div>
  ) : (
    <div>loading...</div>
  );
}
