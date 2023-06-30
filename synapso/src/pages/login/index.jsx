import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import illuCache from "../../assets/illuCache";
import { loginForm } from "../../utils/host";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css";

export default function Login() {
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
						<p className="social-text">Or Sign in with social plateform</p>
						<div className="social-media">
							<Link to="/" className="social-icon">
								<FontAwesomeIcon icon={ faGoogle } />
							</Link>
							<Link to="/" className="social-icon">
								<FontAwesomeIcon icon={ faFacebookF } />
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}