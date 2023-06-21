import {faFacebookF, faGoogle} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useCallback, useEffect, useState} from "react";
import illuCache from "../../assets/illuCache";
import {loginForm} from "../../utils/host";
import {Link} from "react-router-dom";
import axios from "axios";
export default function Login(){
    import("./index.css");
    const [showImg , setImg] = useState(true);

    const HandleWindow = useCallback(() => {
        if(window.innerWidth < 800){
            setImg(false);
        }else {
           setImg(true);
        }
    },[]);

    useEffect(() => {
        HandleWindow();
        window.addEventListener("resize",HandleWindow);
        window.addEventListener("orientationchange",HandleWindow);
    },[HandleWindow])

    const [Form,setForm] = useState({
        username : "",
        password : ""
    })

    const HandleSubmit = (ev) => {
        ev.preventDefault();
        axios.post(loginForm,Form)
        .then(v => {
            console.log(v);
        })
    }

    const HandleChange = (ev) => {
        setForm({...Form , [ev.target.name] : ev.target.value})
    }

    return (
    <div className="login-page">
        <div className="centered-login-page">

            {
                showImg &&
                <img className="img-illustration-login-page"
                     src={illuCache(11)}
                        alt="Illustration"/>
            }

            <div className="form-controls">
                <div className="header-form-controller">
                    <h1 className="title-form">Welcome back !</h1>
                </div>

                <form className="form-rows" onSubmit={HandleSubmit}>

                    <div className="card-form-input">
                        <div className="form-case-input">
                            <input className="input-form-text"
                                   autoComplete="off"
                                   type="text"
                                   name="username"
                                   onChange={HandleChange}
                                   id="username" />

                            <label htmlFor="username" className="label-input">Username</label>
                        </div>
                    </div>

                    <div className="card-form-input">
                        <div className="form-case-input">
                            <input className="input-form-text"
                                   autoComplete="off"
                                   type="password"
                                   name="password"
                                   onChange={HandleChange}
                                   id="password" />

                            <label htmlFor="password" className="label-input">Password</label>
                        </div>
                    </div>

                    <div className="form-endings">
                        <button className="btn-submit-form">Submit</button>
                        <Link to="/password/forgot" className="forgot-password">Forgot password</Link>
                    </div>
                </form>

                <div className="dont-have-account-case">
                    <p className="dont-have-account">Don't have an account ?</p>
                    <Link className="signup-link" to="/signup">Signup</Link>
                </div>

                <div className="footer-rows-form">
                    <h2 className="suggestion-with-form-api">Login with</h2>

                    <Link to="/" className="link-to-login-api">
                        <FontAwesomeIcon icon={faGoogle} className="icon-login-api"/>
                        <span className="span-login-api">Google</span>
                    </Link>

                    <Link to="/" className="link-to-login-api">
                        <FontAwesomeIcon icon={faFacebookF}  className="icon-login-api"/>
                        <span className="span-login-api">Facebook</span>
                    </Link>

                </div>
            </div>
        </div>
    </div>
    )
}