import React, { useState, useEffect } from "react";
import Card from "./movieCard";
import StarRatingComponent from "react-star-rating-component";

const Search = ({ srch, btn, cond }) => {
  const [inp, setInp] = useState("");
  const [star, setStar] = useState(0);
  const [blur, setBlur] = useState(cond);
  let fil = srch.filter((e) =>
    e.name.toLowerCase().includes(inp.toLowerCase())
  );

  star && (fil = fil.filter((e) => e.rating == star));
  useEffect(() => setBlur(cond), [cond]);

  return (
    <>
      <div className="div2">
        <button title="Add new movie" id="btn" onClick={() => btn(true)}>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="div4">
          <input
            type="text"
            onChange={(e) => setInp(e.target.value)}
            className="inp"
            placeholder="Search movies"
          />
          <i
            className="fa fa-search"
            style={{
              fontSize: "25px",
              position: "absolute",
              right: "30px",
              top: "25px",
              transform: "translate(15px,-12.5px)",
            }}
          ></i>
        </div>
        <div className="div3">
          <label
            style={{
              padding: "10px",
            }}
          >
            Advanced Search
          </label>
          <StarRatingComponent
            name="search"
            editing={true}
            onStarClick={(e) => setStar(e)}
            starCount={5}
            value={star}
          />
        </div>
        <button
          onClick={() => (window.location.href = window.location.href)}
          title="Refresh page"
          id="btn"
        >
          <i class="fas fa-home"></i>
        </button>
      </div>
      <div
        className="App"
        style={{
          filter: blur && "blur(8px)",
        }}
      >
        {fil.length != 0 ? (
          <Card card={fil} />
        ) : (
          <div
            style={{
              color: "Red",
              fontSize: "25px",
            }}
          >
            No Results Found
          </div>
        )}
      </div>
    </>
  );
};
export default Search;
