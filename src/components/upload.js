import { useRef } from "react";
import Logo from "./images/sh-logo.png";

const Upload = ({ handleShow }) => {
    const inputFile = useRef();
    const inputText = useRef();

    let hide = "hide";

    const handleSubmit = () => {
        alert("You Have Submitted")
    }

    const handleCvUpload = () => {
        inputFile.current.click();
        inputText.current.disabled = "true";
        inputText.current.placeholder = inputFile.current.files[0]["name"];
    }


    return (
        <article className="upload">
            <div className="upload-logo">
                <img src={Logo} alt="Logo" />
            </div>

            <form>
                <div className="form-fields">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required />
                </div>
                <div className="form-fields">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-fields">
                    <label htmlFor="number">Phone Number</label>
                    <input type="number" name="number" required />
                </div>
                <div className="form-fields cv">
                    <label htmlFor="cv">Curriculum Vitae</label>
                    <input type="text" placeholder="Click to add Curriculum Vitae" onClick={handleCvUpload} ref={inputText} />
                    <input type="file" name="cv" id="cv" accept="image/*, .pdf, .doc, .docx" style={{ display: "none" }} ref={inputFile} required />
                </div>
                <div className="form-fields">
                    <label htmlFor="job">Job Description</label>
                    <input type="text" id="job" placeholder="Click to add Job Description" required />
                </div>

                <div className="handle-btns">
                    <button onClick={() => handleShow(hide)}>Cancel</button>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </article>
    )
}

export default Upload;
