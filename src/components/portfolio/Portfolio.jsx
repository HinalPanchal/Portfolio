import React from "react";
import "./portfolio.css";
import MemeGenerator from "../../assets/MemeGenerator.png";
import Tenzies from "../../assets/Tenzies.png";

const data = [
  {
    id: 1,
    image: Tenzies,
    title: "Tenzies Game",
    github: "https://github.com/HinalPanchal/Tenzies",
    demo: "https://hinalpanchal.github.io/Tenzies/",
  },
  {
    id: 2,
    image: MemeGenerator,
    title: "Meme Generator",
    github: "https://github.com/HinalPanchal/MemeGenerator",
    demo: "https://hinalpanchal.github.io/MemeGenerator/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Want to pass some time</h5>
      <h2>Try something Fun</h2>

      <div className="container portfolio_container">
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
