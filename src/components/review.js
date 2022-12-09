import Lane from "./images/sh-review.png";
import Robert from "./images/sh-reviews.png";
import Quote from "./images/sh-quote.png";

const Review = () => {
    return (
        <section className="review">
            <h2>Reviews</h2>

            <h3>What People say About Us</h3>

            <article>
                <div className="review-container">
                    <div>
                        <img src={Lane} alt="Lane" />
                        <span>Olive Lane</span>
                    </div>
                    <div className="review-text">
                        <img src={Quote} alt="Quotes" />
                        <p>With SideHustle CV Review Platform,
                            I was able to get my dream job at
                            IBM as a Data Analyst.
                        </p>
                    </div>
                </div>

                <div className="review-container">
                    <div>
                        <img src={Robert} alt="Robert" />
                        <span>Nemo Robert</span>
                    </div>
                    <div className="review-text">
                        <img src={Quote} alt="Quotes" />
                        <p>With SideHustle CV Review Platform,
                            I was able to get my dream job at
                            Google as Senior Product Designer.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Review;
