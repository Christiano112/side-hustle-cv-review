import { useRef } from "react";
import { useForm } from "react-hook-form";
import Logo from "./images/sh-logo.png";

const Upload = ({ handleShow }) => {
    const inputFile = useRef();
    const inputText = useRef();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    let hide = "hide";

    const handleCvUpload = () => {
        inputFile.current.click();
        inputText.current.disabled = "true";
    }

    const handlePlaceHolder = () => {
        if (inputFile.current.files) {
            inputText.current.placeholder = inputFile.current.files[0]["name"];
            console.log(inputFile.current.files[0]["name"]);
        }
    }


    return (
        <article className="upload">
            <div className="upload-logo">
                <img src={Logo} alt="Logo" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-fields">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
                        aria-invalid={errors.name ? "true" : "false"} />
                    {errors.name?.type === 'required' && <p role="alert" style={{fontSize: ".7rem", color: "red"}}>Name is required</p>}
                </div>
                <div className="form-fields">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" {...register("email", { required: true, })}
                        aria-invalid={errors.mail ? "true" : "false"} />
                    {errors.email && <p role="alert" style={{ fontSize: ".7rem", color: "red" }}>{errors.email?.message}</p>}
                </div>
                <div className="form-fields">
                    <label htmlFor="number">Phone Number</label>
                    <input type="number" name="number" {...register("telephone", { required: true, })} />
                </div>
                <div className="form-fields cv">
                    <label htmlFor="cv">Curriculum Vitae</label>
                    <input type="text" placeholder="Click to add Curriculum Vitae" onClick={() => handleCvUpload()} ref={inputText} />
                    <input type="file" name="cv" id="cv" accept="image/*, .pdf, .doc, .docx" style={{ display: "none" }} onChange={() => handlePlaceHolder()} ref={inputFile} required />
                </div>
                <div className="form-fields">
                    <label htmlFor="job">Job Description</label>
                    <input type="text" id="job" placeholder="Click to add Job Description" required />
                </div>

                <div className="handle-btns">
                    <button onClick={() => handleShow(hide)}>Cancel</button>
                    <button type="submit" onClick={handleSubmit(onSubmit)}>Submit</button>
                </div>
            </form>
        </article>
    )
}

export default Upload;
