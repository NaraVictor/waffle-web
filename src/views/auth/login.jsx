import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { DefaultButton } from "../../components";
import logo from "../../static/img/logo.png";
import { useForm } from "react-hook-form";
import { validateLogin } from "../../utils/utils";

const Login = (props) => {
	const [loginError, setloginError] = useState(false);
	const [errMsg, setErrMsg] = useState("");
	const [label, setLabel] = useState("Login");
	const { register, handleSubmit } = useForm();
	const history = useHistory();

	const submitLogin = (data) => {
		setLabel("please wait...");

		// joi validation
		const { error } = validateLogin(data);
		if (error) {
			setloginError(true);
			setErrMsg(error.message);
			setLabel("Login");
			return;
		}

		// server submit
		axios
			.post("https://webapi.wafflegh.com/api/account/login", { ...data })
			.then((res) => {
				console.log(res.data);
				history.replace("/home")
				setloginError(false);
			})
			.catch((err) => {
				// console.log("login error ", err);
				setloginError(() => {
					return true;
				});
				setErrMsg("Login unsuccessful. Try again!");
			})
			.finally((f) => {
				setLabel("Login");
			});
	};

	return (
		<section className="container">
			<div className="row d-flex justify-content-center">
				<div className="col-12 login d-flex justify-content-center shadow bg-light rounded p-0 pb-3">
					<article className="w-100">
						<article className="login__header d-block p-3 bg-white">
							<img
								src={logo}
								alt="waffle company logo"
								className="auth_logo mb-2"
							/>
							<h5>Login</h5>
						</article>
						{/* <div>
							<img src={logo} alt="Company Logo" className="login__logo" />
						</div> */}
						{loginError && (
							<div className="bg-danger text-white p-1">{errMsg}</div>
						)}
						<form
							onSubmit={handleSubmit(submitLogin)}
							className="login__form mt-5 px-md-4 px-2">
							<div className="col-12">
								<div className="has-float-label mb-1">
									<input
										id="username"
										className="form__control  w-100 shadow-sm"
										type="text"
										{...register("username", { required: true })}
										placeholder="email or username"
									/>
									<label htmlFor="username">Username</label>
								</div>
							</div>

							<div className="col-12">
								<div className="has-float-label mb-1">
									<input
										id="password"
										className="form__control w-100 shadow-sm"
										type="password"
										{...register("password", { required: true })}
										placeholder="password"
									/>
									<label htmlFor="password">Password</label>
								</div>
							</div>
							<DefaultButton classes="mt-3">{label}</DefaultButton>
							<div className="mt-4 login__links">
								<Link to="/forgot-password">Forgot password?</Link>
								<Link to="/signup">Create new account</Link>
							</div>
						</form>
					</article>
				</div>
			</div>
		</section>
	);
};

export { Login };
