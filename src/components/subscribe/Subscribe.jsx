import "./Subscribe.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Subscribe = () => {
    useEffect(() => {
        Aos.init({duratiion: 1000});
    });

  return (
    <section className="subscribe">
        <div className="subscribe__container wrapper">
            <h2 data-aos="fade-up">Subscribe & get news updates</h2>
            <p data-aos="fade-up">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quos modi corporis odio praesentium quis in, et mollitia eaque temporibus quisquam fugiat ex architecto iste. Soluta provident iure iusto! Sint!</p>
            <form action="#" data-aos="fade-up">
                <input type="email" placeholder="Write Your Email Here"/>
                <a href="#" className="btn">
                    Subscribe
                </a>
            </form>
        </div>
    </section>
  )
}

export default Subscribe