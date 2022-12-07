import React, { useState, useRef } from "react";
import "./style.css";
import ShowCard from "../../components/ShowCards";
import db from "../../db.json";
import ShowPageHero from "../../components/ShowPgaeHero/ShowPageHero";
const index = ({
  ShowCardImg,
  ShowCardTitle,
  ShowCardInfo,
  ShowCardDescription,
}) => {
  const paginationStyle = useRef();
  const [season, setSeason] = useState("");

  const arr = [];
  const opt = [];
  db.cosmosShowPageCards.map((item, i) => {
    if (!opt.find((e) => e == item.spaceSeason)) {
      opt.push(item.spaceSeason);
    }
  });

  db.cosmosShowPageCards.map((item) => {
    if (item.spaceSeason == season) {
      arr.push(item);
    }
  });

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPage, setTotalPage] = useState(3);

  const firstPage = currentPage * totalPage;

  const lastPage = firstPage - totalPage;

  const lastData = db.cosmosShowPageCards.slice(lastPage, firstPage);

  const paginate = (id) => {
    setCurrentPage(id);
  };

  const pageNumber = [];
  for (
    let i = 1;
    i <= Math.ceil(db.cosmosShowPageCards.length / totalPage);
    i++
  ) {
    pageNumber.push(i);
  }

  function heyOrder(e) {
    setSeason(e);
    paginationStyle.current.classList.add("d-none");
  }

  return (
    <>
      <ShowPageHero />
      <section className="SectionShowCard">
        <div className="container">
          <div className="ShowCards-texts">
            <h2 className="ShowCards-textsTitle">
              E01 S01 - star-forming in the Carina Nebula
            </h2>
            <p className="ShowCards-textsDescription">
              Called the Cosmic Cliffs, the region is actually the edge of a
              gigantic, gaseous cavity within NGC 3324, roughly 7,600
              light-years away. The cavernous area has been carved from the
              nebula by the intense ultraviolet radiation and stellar winds from
              extremely massive, hot, young stars located in the center of the
              bubble, above the area shown in this image. The high-energy
              radiation from these stars is sculpting the nebula’s wall by
              slowly eroding it away.{" "}
            </p>
          </div>

          <div className="selectShowCard">
            <select
              id="ShowSelect"
              className="ShowSelect"
              onChange={(e) => heyOrder(e.target.value)}
            >
              <option selected disabled>
                ALL
              </option>
              {opt.map((item, i) => {
                return <option>{item}</option>;
              })}
            </select>
          </div>

          {arr.length <= 0
            ? lastData.map((item, i) => {
                return (
                  <>
                    <ShowCard
                      ShowCardImg={item.posterVideo}
                      ShowCardTitle={item.spaceTitle}
                      ShowCardInfo={item.spaceTime}
                      ShowCardDescription={item.sapceDesc}
                      key={i}
                    />
                  </>
                );
              })
            : arr.map((item, i) => {
                return (
                  <>
                    <ShowCard
                      ShowCardImg={item.posterVideo}
                      ShowCardTitle={item.spaceTitle}
                      ShowCardInfo={item.spaceTime}
                      ShowCardDescription={item.sapceDesc}
                      key={i}
                    />
                  </>
                );
              })}
        </div>
      </section>

      <div
        className="container mt-5 mb-5 d-flex justify-content-center"
        ref={paginationStyle}
      >
        <div className="pagenation_wrapp mx-auto mt-5 mb-5">
          <nav aria-label="...">
            <ul className="pagination pagination-sm d-flex flex-wrap">
              {pageNumber.map((pageEl) => {
                return (
                  <li
                    className="page-item bg-secondary  rounded-5 p-1 mx-1 my-2"
                    onClick={() => paginate(pageEl)}
                  >
                    <a className="page-link">{pageEl}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default index;
