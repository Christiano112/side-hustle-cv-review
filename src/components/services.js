import ServicePic from "./images/sh-service.png";
import ServiceImg from "./images/sh-services.png";

const Services = () => {
    return (
        <section className="services">
            <h2>Our Services</h2>

            <div className="services-container">
                <section>
                    <h3>We provide awesome CV Review services</h3>
                    <img src={ServicePic} alt="Our Service" />
                </section>

                <article>
                    <p>Lets help handle your CV, professionally and give you a perfect solution on how to position your career.
                        We also provide excellent mentorship and 24 hours friendly support.</p>
                    <img src={ServiceImg} alt="Our Services" />
                </article>
            </div>
        </section>
    )
}

export default Services;
