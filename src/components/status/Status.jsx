import "./Status.scss";
import StatusImg from "../../assets/status.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Status = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    });
    return (
        <section className="status">
            <div className="status__container wrapper" data-aos="zoom-in-up">
                <div className="status__left">
                    <h2>Trust us due to our safe and convenient deposit</h2>
                    <p>Tristique morbi scelerisque vitae. Nulla dui ultrices sed nam liongula dignissim tellus semper lorem facilis ut. Amet tincidunt adipiscing varius maecenas adipiscing.</p>
                    <a href="#" className="btn">KNOW MORE</a>
                </div>

                <div className="status__right" data-aos="fade-left">
                    <img src={StatusImg} alt="status" />
                </div>
            </div>
        </section>
    )
}

export default Status;