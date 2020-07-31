import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./movieCard";
import Search from "./search";
import Modal from "./modal";

function App() {
  const [mov, setMov] = useState([
    {
      img:
        "https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2019/04/Critique-Avengers-Endgame.jpg",
      name: "Avengers EndGame",
      genre: "Action, Adventure, Drama",
      rating: 5,
      date: "3 HR 1 MIN | PG13 | 2019",
    },
    {
      img:
        "https://calvin03music.com.ng/wp-content/uploads/2020/03/1_86XUEh58IN72olShh_vFAQ.jpeg",
      name: "The Gentlemen",
      genre: "Action, Comedy, Crime",
      rating: 4,
      date: "1 HR 53 MIN | R | 2019",
    },
    {
      img: "https://images8.alphacoders.com/100/1004780.jpg",
      name: "Aladdin 2019",
      genre: " Adventure, Family, Fantasy",
      rating: 4,
      date: "2 HR 08 MIN | PG | 2019",
    },
    {
      img:
        "https://m.media-amazon.com/images/M/MV5BZTY5YTk0ZDMtODg0Zi00OGM4LTgxMTQtODAzODg2ZjE2MmM1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      name: "The Old Guard",
      genre: "Action, Adventure, Fantasy",
      rating: 3,
      date: "2 HR 05 MIN | PG-16 | 2020",
    },
    {
      img:
        "https://img.filmsactu.net/datas/films/b/l/bloodshot/xl/bloodshot-5e6b983ad9ed0.jpg",
      name: "Bloodshot",
      genre: " Action, Drama, Sci-Fi",
      rating: 2,
      date: "1 HR 49 MIN | PG-12 | 2020",
    },
    {
      img:
        "http://fr.web.img6.acsta.net/r_1920_1080/pictures/20/02/10/13/26/1423227.jpg",
      name: "Invisible Man",
      genre: " Horror, Mystery, Sci-Fi",
      rating: 4,
      date: "02 HR 04 MIN | PG-12 | 2020",
    },
    {
      img:
        "https://www.ocs.fr/sites/default/files/styles/mobile/public/contest/headerbadboy4life.jpg?itok=4_pDMPvO",
      name: "Bad Boys for Life",
      genre: " Action, Comedy, Crime",
      rating: 3,
      date: "02 HR 04 MIN | PG-13 | 2020",
    },
    {
      img:
        "https://www.telerama.fr/sites/tr_master/files/assets/images/aaaabv3y5jgftj2isbx8k9rhiclqnshobbueedjrq1-2n8qlf5ecx6wklly5yoswgtyxfc7v7im1fsmfliekuhvevwv7rhnhdalewq3vsivnvxa2_jahiwfozure91coga1.jpg",
      name: "Extraction",
      genre: "Action, Thriller",
      rating: 4,
      date: "01 HR 56 MIN | PG-18 | 2020",
    },
  ]);
  const [modl, setModl] = useState(false);

  function add(x) {
    setMov([...mov, ...x]);
  }
  const clk = (x) => setModl(x);
  const clkret = (x) => setModl(x);

  return (
    <>
      <Search srch={mov} btn={clk} cond={modl} />
      <Modal add={add} clk={modl} aff={clkret} />
    </>
  );
}

export default App;
