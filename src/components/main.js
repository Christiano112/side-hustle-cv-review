import MainPic from "./images/sh-main-pic.png";

const Main = () => {
    return (
        <main className="main">
            <section>
                <h1>Break Into Your Dream Job With One CV Review</h1>
                <p>If you want a quick easy CV review support and Advice Techniques For a Career.</p>
                <div className="main-btn">
                    <button>Upload Curriculum Vitae</button>
                    <a href="job">Upload Job Description</a>
                </div>
            </section>

            <div>
                <img src={MainPic} alt="Main Pic" />
            </div>
        </main>
    )
}

export default Main;
