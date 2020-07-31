import React, { useState, useEffect } from "react";
import bsCustomFileInput from "bs-custom-file-input";

const Modal = ({ add, clk, aff }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [label, setLabel] = useState(false);
  const [img, setImg] = useState([]);
  let t = [
    {
      name: "",
      Date: "",
      genre: "",
      rating: 0,
      img: "",
    },
  ];
  useEffect(() => bsCustomFileInput.init());
  return (
    <>
      {clk && aff && (
        <div
          className="form"
          onBlur={() => {
            setLabel(false);
            aff(false);
          }}
        >
          <div>
            <label htmlFor="name">Movie name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Tap the movie name"
            />
          </div>
          <div>
            <label htmlFor="year">Movie year</label>
            <select
              className="custom-select"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            >
              <option defaultValue="0">select movie year</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
            </select>
          </div>
          <div>
            <label htmlFor="genre">Genre</label>
            <select
              className="custom-select"
              onChange={(e) => setGenre(e.target.value)}
              value={genre}
            >
              <option defaultValue="0">select movie genre</option>
              <option value="Adventure">Adventure</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Family">Family</option>
              <option value="Thriller">Thriller</option>
              <option value="Drama">Drama</option>
            </select>
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <select
              className="custom-select"
              onChange={(e) => setRating(Number(e.target.value))}
              value={rating}
            >
              <option defaultValue="0">select movie rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={(e) => setImg(e.target.files)}
              />
              <label className="custom-file-label" for="customFile">
                Choose image from public folder
              </label>
            </div>
          </div>
          <button
            onClick={() => {
              if (name && genre && date && rating && img.length != 0) {
                t.map((e) => {
                  e.name = name;
                  e.date = date;
                  e.genre = genre;
                  e.rating = rating;
                  e.img = img[0].name;
                });
                add(t);
                setName("");
                setRating(0);
                setDate(0);
                setGenre(0);
                setImg([]);
                setLabel(false);
                aff(false);
              } else setLabel(true);
            }}
          >
            ADD
          </button>
          <br />
          {label && <label>Please enter a valid information</label>}
        </div>
      )}
    </>
  );
};
export default Modal;
