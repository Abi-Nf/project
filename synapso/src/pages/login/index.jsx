import { faFacebookF, faGoogle, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import signUpImage from "../../assets/illustrations/Connected world-pana.svg";
import signInImage from "../../assets/illustrations/World-cuate.svg";
import "./index.css";

const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
  });

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

					<form action="" className="sign-up-form">
						<h2 className="title">Sign Up</h2>
						<div className="input-field">
							<input type="text" placeholder="First Name" />
						</div>
						<div className="input-field">
							<input type="text" placeholder="Last Name" />
						</div>
						<div className="input-field">
							<input type="mail" placeholder="Email" />
						</div>
						<input type="submit" value="Sign up" className="btn solid" />
						<p className="social-text">Or Sign up with social plateforms</p>
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
					<img src={signUpImage} alt="" srcset="" className="image" />
				</div>
				<div className="panel right-panel">
					<div className="content">
						<h3>One of us?</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas assumenda atque, esse placeat aut!</p>
						<button className="btn transparent" id="sign-in-btn">Sign in</button>
					</div>
					<img src={signInImage} alt="" srcset="" className="image" />
				</div>
			</div>
		</div>
	);
}

export default Login;