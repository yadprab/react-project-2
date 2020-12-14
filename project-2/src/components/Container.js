import React, { useState } from "react";
import { reviews } from "../reviews";

const Container = () => {
  const team = [...reviews];
  let [rev, revFn] = useState(0);
  const prevFn = (e) => {
    const len = team.length - 1;
    rev--;
    if (rev < 0) {
      revFn(len);
    } else {
      revFn(rev);
    }
  };
  const nextFn = (e) => {
    const len = team.length - 1;
    rev++;
    if (rev > len) {
      revFn(0);
    } else {
      revFn(rev);
    }
  };
  const randomFn = () => {
    const random = Math.floor(Math.random() * team.length);
    revFn(random);
  
  };
  return (
    <>
      <section className="container">
        <section className="img--section">
          <img src={team[rev].image} alt="" />
          <span id="quote--icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
            </svg>
          </span>
        </section>
        <section className="about--section">
          <h2 id="name" aria-label="name of the person">
            {team[rev].name}
          </h2>
          <p id="role" aria-label="position">
            {team[rev].job}
          </p>
        </section>
        <article className="review">
          <p>{team[rev].text}</p>
        </article>
        <section className="button--section">
          <button id="chev--left" aria-label="move backwards" onClick={prevFn}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L9.41421 10L12.7071 13.2929C13.0976 13.6834 13.0976 14.3166 12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289Z"
                fill="#4A5568"
              />
            </svg>
          </button>
          <button id="chev--right" aria-label="move forwards" onClick={nextFn}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
                fill="#4A5568"
              />
            </svg>
          </button>
        </section>
        <section className="random--section">
          <button id="suprise" onClick={randomFn}>
            suprise me
          </button>
        </section>
      </section>
    </>
  );
};

export { Container };
