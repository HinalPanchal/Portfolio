import React, { useState, useEffect } from "react";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Quote from "../../assets/Quote.png";
import Fact from "../../assets/Fact.png";
import Joke from "../../assets/Joke.png";

const Testimonials = () => {
  const [quotes, setQuotes] = useState([]);
  const [jokes, setJokes] = useState([]);
  const [mathFacts, setMathFacts] = useState([]);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100)
  );

  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await fetch("https://type.fit/api/quotes");
      const data = await res.json();
      setQuotes(data);
      setRandomNumber(Math.floor(Math.random() * 100));
    };

    const fetchJokes = async () => {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();
      setJokes([data]);
    };

    const fetchMathFacts = async () => {
      let types = ["trivia", "math", "year", "date"];
      let category = types[Math.floor(Math.random() * types.length)];
      const res = await fetch(`http://numbersapi.com/random/${category}?json`);
      const data = await res.json();
      setMathFacts([data]);
    };

    fetchQuotes();
    fetchJokes();
    fetchMathFacts();
  }, []);

  return (
    <section id="testimonials">
      <h5>Something new to read on every refresh</h5>
      <h2>Interesting Reads</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt="react_image" />
            </div>

            {index === 0 && quotes.length > 0 && (
              <>
                <h5>{quotes[randomNumber].author}</h5>
                <small className="client_review">
                  {quotes[randomNumber].text}
                </small>
              </>
            )}
            {index === 1 && jokes.length > 0 && (
              <>
                <h5>{jokes[0].setup}</h5>
                <small className="client_review">{jokes[0].punchline}</small>
              </>
            )}
            {index === 2 && mathFacts.length > 0 && (
              <>
                <h5>
                  {mathFacts[0].type.charAt(0).toUpperCase() +
                    mathFacts[0].type.slice(1)}
                </h5>
                <small className="client_review">{mathFacts[0].text}</small>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const data = [
  {
    avatar: Quote,
    url: "https://type.fit/api/quotes",
  },
  {
    avatar: Joke,
    url: "https://official-joke-api.appspot.com/random_joke",
  },
  {
    avatar: Fact,
    url: "http://numbersapi.com/random?json",
  },
];

export default Testimonials;
