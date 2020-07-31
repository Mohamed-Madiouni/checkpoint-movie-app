import React, { useState } from "react";
// import BeautyStars from "beauty-stars";
import StarRatingComponent from "react-star-rating-component";

const Card = ({ card }) => {
  const [hover, setHover] = useState(false);
  const [ind, setInd] = useState(null);
  return (
    <>
      {card.map((e, index) => (
        <div
          className="div"
          key={index}
          onMouseEnter={() => {
            setHover(true);
            setInd(index);
          }}
          onMouseLeave={() => setHover(false)}
        >
          <img
            src={e.img}
            alt={e.name}
            title={e.name}
            width="100%"
            height={hover && ind === index ? "72%" : "100%"}
            style={{
              borderRadius: hover ? "20px 20px 0px 0px" : "18px",
            }}
          />
          {hover && ind === index && (
            <>
              <div>{e.genre}</div>
              <div>
                <StarRatingComponent
                  name={e.name}
                  editing={false}
                  starCount={5}
                  value={e.rating}
                />
              </div>
              <div>
                <b>{e.name}</b>
              </div>
              <div>{e.date}</div>
            </>
          )}
        </div>
      ))}
    </>
  );
};
export default Card;
