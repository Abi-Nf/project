import { faFacebookF, faGoogle, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Image from "../../assets/illustrations/Friends-bro.svg"
import "./index.css";

const Login = () => {
	return (
		<div className="container">
			<div className="forms-container">
				<div className="signin-signup">
					<form action="" className="sign-in-form">
						<h2 className="title">Sign In</h2>
						<div className="input-field">
							<input type="text" placeholder="Username" />
						</div>
						<div className="input-field">
							<input type="password" placeholder="Password" />
						</div>
						<input type="submit" value="Login" className="btn solid" />
						<p className="social-text">Or Sign in with social plateforms</p>
						<div className="social-media">
							<Link to="/" className="social-icon">
								<FontAwesomeIcon icon={faGoogle} />
							</Link>
							<Link to="/" className="social-icon">
								<FontAwesomeIcon icon={faFacebookF} />
							</Link>
							<Link to="/" className="social-icon">
								<FontAwesomeIcon icon={faTwitter} />
							</Link>
							<Link to="/" className="social-icon">
								<FontAwesomeIcon icon={faGithub} />
							</Link>
						</div>
					</form>
				</div>
			</div>

			<div className="panels-container">
				<div className="panel left-panel">
					<div className="content">
						<h3>New here?</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas assumenda atque, esse placeat aut!</p>
						<button className="btn transparent" id="sign-up-btn">Sign up</button>
					</div>
					<img src={ Image } alt="" srcset="" className="image"/>
				</div>
			</div>
		</div>
	);
}

export default Login;