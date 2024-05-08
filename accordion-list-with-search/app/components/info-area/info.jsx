import React from "react";

import style from "./style.module.scss";

export default function InfoArea({ person, openInfo, setOpenInfo }) {
  console.log(openInfo, "open");
  return (
    <>
      {person && (
        <div className={style.container}>
          <p> Detail:</p>
          <span>Email: {person.email}</span>
          <span> Phone: {person.phone}</span>
          <p>Address:</p>
          <span>City: {person.address.city}</span>
          <span>Zip Code: {person.address.zipcode}</span>
        </div>
      )}
    </>
  );
}
