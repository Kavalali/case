import React, { useState } from "react";
import Image from "next/image";
import InfoArea from "../info-area/info";

import styles from "./style.module.scss";

function Card({ people }) {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <div>Id</div>
      <div>User Name</div>
      <div>Name</div>
      </div>
      {people &&
        people
          .filter((item) => item.filter)
          .map((item) => (
            <div key={item.id}>
              <div className={styles.content}>
                <div className={styles.id}>{item.id}</div>
                <div className={styles.userName}>{item.username}</div>
                <div className={styles.name}>{item.name}</div>

                <Image
                  src="/icons/up.svg"
                  width={32}
                  height={32}
                  className={styles.infoButton}
                  onClick={() => {
                    setMovePerson(item);
                  }}
                />
                <Image
                  src="/icons/right.svg"
                  width={32}
                  height={32}
                  className={
                    openItemId === item.id ? styles.iconDown : styles.icon
                  }
                  onClick={() => toggleAccordion(item.id)}
                />
              </div>
              {openItemId === item.id && <InfoArea person={item} />}
            </div>
          ))}
    </div>
  );
}

export default Card;
