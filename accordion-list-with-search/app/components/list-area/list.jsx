import React, { useEffect, useState } from "react";

import style from "./style.module.scss";

import Card from "../card/item";
import Filter from "../filter/filter";
import Loading from "./loading";

function List() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data.map((item) => ({ ...item, filter: true })));
        setLoading(false);
      });
  }, []);

  return (
    <div className={style.container}>
      <Filter people={data} setData={setData} />
      {isLoading && <Loading /> }
      <Card people={data} />
    </div>
  );
}

export default List;
