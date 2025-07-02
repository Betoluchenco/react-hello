import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  const cards = [
    {
      title: "Card 1",
      text: "Some quick example text to build on the card title.",
      image: "https://via.placeholder.com/500x325"
    },
    {
      title: "Card 2",
      text: "Another piece of supporting content.",
      image: "https://via.placeholder.com/500x325"
    },
    {
      title: "Card 3",
      text: "Content that shows what this is about.",
      image: "https://via.placeholder.com/500x325"
    },
    {
      title: "Card 4",
      text: "And something else to round it out.",
      image: "https://via.placeholder.com/500x325"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="row g-4">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} text={card.text} image={card.image} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
