import MainPic from "./images/sh-main-pic.png";
import Upload from "./upload";
import { useState } from 'react';

const Main = () => {
    const [show, setShow] = useState("hide");
    let display = "block";

    const handleShow = (show) => {
        setShow(show)
    }

    return (
        <>
            <main className="main">
                <section>
                    <h1>Break Into Your Dream Job With One CV Review</h1>
                    <p>If you want a quick easy CV review support and Advice Techniques For a Career.</p>
                    <div className="main-btn">
                        <button onClick={() => handleShow(display)}>Upload Curriculum Vitae</button>
                        <a href="#job">Upload Job Description</a>
                    </div>
                </section>

                <div>
                    <img src={MainPic} alt="Main Pic" />
                </div>
            </main>

            {show !== "hide" && (<Upload handleShow={handleShow} />)}

        </>
    )
}

export default Main;
