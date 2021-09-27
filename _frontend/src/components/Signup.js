import React, { useState } from "react";

const Signup = ({signUp}) => {
    const INITIAL_STATE = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        securityQuestion: "",
        securityAnswer: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(formData.username, formData.password, formData.firstName, formData.lastName, formData.email, formData.dateOfBirth, formData.securityQuestion, formData.securityAnswer);
        setFormData(INITIAL_STATE);
    }
    
    return(
        <>
            <div className="signupParent">
                <h1 className="signupH1">Signup</h1>
                <div className="divSignup">By signing up you have the ability to like songs, which allows you to randomly select between the songs you liked.</div>
                <form className="signupForm" onSubmit={handleSubmit}>
                    <div className="signupDiv">
                        <div>
                        <input 
                            type="text"
                            className="signupInputs"
                            placeholder="Username"
                            name="username"
                            id="username"
                            key="username"
                            value={formData.username}
                            onChange={handleChange} />
                        </div>
                        <div>
                        <input 
                            type="password"
                            className="signupInputs"
                            placeholder="Password"
                            name="password"
                            id="password"
                            key="password"
                            value={formData.password}
                            onChange={handleChange} />
                        </div>
                        <div>
                        <input 
                            type="text"
                            className="signupInputs"
                            placeholder="First Name"
                            name="firstName"
                            id="firstName"
                            key="firstName"
                            value={formData.firstName}
                            onChange={handleChange} />
                        </div>
                        <div>
                        <input 
                            type="text"
                            className="signupInputs"
                            placeholder="Last Name"
                            name="lastName"
                            id="lastName"
                            key="lastName"
                            value={formData.lastName}
                            onChange={handleChange} />
                        </div>
                        <div>
                        <input 
                            type="text"
                            className="signupInputs"
                            placeholder="Email Address"
                            name="email"
                            id="email"
                            key="email"
                            value={formData.email}
                            onChange={handleChange} />
                        </div>
                        <div>
                        <input 
                            type="password"
                            className="signupInputs"
                            placeholder="Date of Birth"
                            name="dateOfBirth"
                            id="dateOfBirth"
                            key="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange} />
                        </div>
                        <div>
                        <input 
                            type="text"
                            className="signupInputs"
                            placeholder="Security Question"
                            name="securityQuestion"
                            id="securityQuestion"
                            key="securityQuestion"
                            value={formData.securityQuestion}
                            onChange={handleChange} />
                        </div>
                        <div>
                        <input 
                            type="password"
                            className="signupInputs"
                            placeholder="Security Answer"
                            name="securityAnswer"
                            id="securityAnswer"
                            key="securityAnswer"
                            value={formData.securityAnswer}
                            onChange={handleChange} />
                        </div>
                    </div>
                    <div>
                        <button className="signupButton">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup;