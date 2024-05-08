import React, { useState, useMemo } from "react";

import styles from "./filter.module.scss";
import Image from "next/image";

export default function Filter({ people, setData }) {
  const filters = [
    { placeholder: "Username", id: "username" },
    { placeholder: "Name", id: "name" },
    { placeholder: "Email", id: "email" },
    { placeholder: "City", id: "city" },
    { placeholder: "Zip Code", id: "zipcode" },
    { placeholder: "Address", id: "street" },
  ];

  const [search, setSearchResult] = useState([]);
  const [inputLength, setInputLength] = useState(0);

  const handleInput = (event) => {
    const searchTerm = event.target.value;
    const searchType = event.target.id;
    if (searchTerm.length > 1) {
      const timeOut = setTimeout(() => {
        const result = people.map((item) => {
          return {
            ...item,
            filter: item[searchType]
              .toLowerCase()
              .includes(searchTerm.toLowerCase()),
          };
        });
        setData(result);
      }, 500);
      return () => {
        clearTimeout(timeOut);
      };
    } else {
      setData(people.map((item) => ({ ...item, filter: true })));
    }
    setInputLength(searchTerm.length);
  };

  return useMemo(
    () => (
      <div className={styles.container}>
        <div>Filter</div>
        {filters.map((item) => (
          <>
            <div className={styles.search}>
              <Image
                src="/icons/search.svg"
                width={20}
                height={20}
                className={styles.searchIcon}
              />
              <input
                type="text"
                placeholder={item.placeholder}
                onChange={handleInput}
                id={item.id}
              />
            </div>
          </>
        ))}
      </div>
    ),
    [people]
  );
}
