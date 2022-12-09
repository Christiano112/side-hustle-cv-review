import Arrow from "./images/sh-arrow.png";
import Girl from "./images/sh-girl.png";
import Laptop from "./images/sh-laptop.png";
import WorkPic from "./images/sh-work.png";

const Work = () => {
    return (
        <section className="work">
            <h2>How It Works</h2>

            <div className="work-paragraph">
                <img src={Arrow} alt="arrow" />
                <p>Fill in your details, upload your Curriculum Vitae and job description by clicking the Upload button.</p>
            </div>

            <div className="work-paragraph">
                <img src={Arrow} alt="arrow" />
                <p>Then, wait for our experts to run a review and give you the best</p>
            </div>

            <p className="work-special">Incase of a general CV with no  specific job application, just click the upload CV button and our experts <span> will help you make your CV a job enticing one.</span></p>

            <div className="work-images">
                <img src={Girl} alt="a girl" />
                <img src={Laptop} alt="a laptop" />
                <img src={WorkPic} alt="some women" />
            </div>
        </section>
    )
}

export default Work;
