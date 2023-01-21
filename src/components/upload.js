import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "./images/sh-logo.png";

const Upload = ({ handleShow }) => {
    const inputFile = useRef();
    const inputText = useRef();
    const [showModal, setShowModal] = useState(true)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setShowModal(false);
        setTimeout(() => {
            handleShow(hide);
        }, 4000)
    };

    let hide = "hide";

    const handleCvUpload = () => {
        inputFile.current.click();
        inputText.current.disabled = "true";
    }

    const handlePlaceHolder = () => {
        if (inputFile.current.files) {
            inputText.current.placeholder = inputFile.current.files[0]["name"];
            // console.log(inputFile.current.files[0]["name"]);
        }
    }



    return (
        <>
            {showModal ?
                <article className="upload">
                    <div className="upload-logo">
                        <img src={Logo} alt="Logo" />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-fields">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Enter your name" {...register("name", { required: true })}
                                aria-invalid={errors.name ? "true" : "false"} />
                            {errors.name?.type === 'required' && <p role="alert" style={{ fontSize: ".7rem", color: "red" }}>Name is required</p>}
                        </div>
                        <div className="form-fields">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Enter your email" {...register("mail", { required: "Email Address is required" })}
                                aria-invalid={errors.mail ? "true" : "false"} />
                            {errors.mail && <p role="alert" style={{ fontSize: ".7rem", color: "red" }}>{errors.mail?.message}</p>}
                        </div>
                        <div className="form-fields">
                            <label htmlFor="number">Phone Number</label>
                            <input type="number" placeholder="Enter your telephone" name="number" {...register("telephone", { required: true, })} />
                            {errors.telephone && <p role="alert" style={{ fontSize: ".7rem", color: "red" }}>Telephone Number is required</p>}
                        </div>
                        <div className="form-fields cv">
                            <label htmlFor="cv">Curriculum Vitae</label>
                            <input type="text" placeholder="Add your CV" onClick={() => handleCvUpload()} ref={inputText} />
                            <input type="file" name="cv" id="cv" accept="image/*, .pdf, .doc, .docx" style={{ display: "none" }} onChange={() => handlePlaceHolder()} ref={inputFile} />
                        </div>
                        <div className="form-fields">
                            <label htmlFor="job">Job Description</label>
                            <input type="text" id="job" placeholder="Add a Job Description"
                                {...register("job", { required: true })} />
                            {errors.job?.type === 'required' && <p role="alert" style={{ fontSize: ".7rem", color: "red" }}>Job Description is required</p>}
                        </div>

                        <div className="handle-btns">
                            <button onClick={() => handleShow(hide)}>Cancel</button>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </article>
                :
                <div className="message-modal">
                    <h3 style={{ color: "#52A350" }}>Form <span>Submitted</span> Successfully</h3>
                </div>
            }
        </>
    )
}

export default Upload;
