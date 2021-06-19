import { PrimaryButton } from "../../components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import { DefaultButton } from "../../components";
import logo from "../../static/img/logo.png";
import { validateSignup } from "../../utils/utils";

const SignUp = (props) => {
	const { register, handleSubmit } = useForm();
	const [level, setLevel] = useState(1);
	const [signupError, setSignUpError] = useState(false);
	const [errMsg, setErrMsg] = useState("");
	const [label, setLabel] = useState("Signup");
	const [busy, setBusy] = useState(false);
	const history = useHistory()

	const onSubmit = (data) => {
		setLabel("Working...");
		setBusy(true);

		const { error } = validateSignup(data);
		if (error) {
			setSignUpError(true);
			setErrMsg(error.details[0].message);
			setLabel("Signup");
			return;
		}

		if (signupError) {
			setErrMsg("");
			setSignUpError(false);
			console.log("reset errors");
		}

		axios
			.post("https://webapi.wafflegh.com/api/account/registration", {
				...data,
			})
			.then((res) => {
				console.log(res.data);
				setSignUpError(false);
				history.replace("/home")
			})
			.catch((err) => {
				console.log("signup error ", err);
				setSignUpError((prev) => {
					return true;
				});
				setErrMsg("Signup unsuccessful.");
			})
			.finally((f) => {
				setBusy(false);
				setLabel("Signup");
			});
	};

	const increaseLevel = () => {
		setLevel((prevLevel) => {
			if (prevLevel === 3) return 3;
			return prevLevel + 1;
		});
	};

	const decreaseLevel = () => {
		setLevel((prev) => {
			if (level === 1) return 1;
			return prev - 1;
		});
	};

	return (
		<section className="container">
			<div className="row d-flex justify-content-center">
				<div className="col-12 login d-flex justify-content-center shadow bg-light rounded p-0 pb-3">
					<article className="w-100">
						<article className="d-block p-3 bg-white login__header">
							<img src={logo} alt="waffle company logo" className="auth_logo" />
							<h5>Signup</h5>
							<span>{level} of 3</span>
						</article>
						{/* <div>
							<img src={logo} alt="Company Logo" className="login__logo" />
						</div> */}
						{signupError && (
							<div className="bg-danger text-white p-1">{errMsg}</div>
						)}

						<form
							onSubmit={handleSubmit(onSubmit)}
							method="post"
							className="mt-5 px-2">
							{level === 1 && (
								<>
									<div className="col-12">
										<div className="has-float-label mb-1">
											<input
												id="firstname"
												className="form__control w-100 shadow-sm"
												type="text"
												placeholder="first name"
												{...register("firstname", { required: true })}
											/>
											<label htmlFor="firstname">First Name</label>
										</div>
									</div>
									<div className="col-12">
										<div className="has-float-label mb-1">
											<input
												className="form__control w-100 shadow-sm"
												id="lastname"
												type="text"
												placeholder="last name"
												{...register("lastname", { required: true })}
											/>
											<label htmlFor="lastname">Last Name</label>
										</div>
									</div>
								</>
							)}
							{level === 2 && (
								<>
									<div className="col-12">
										<div className="has-float-label mb-1">
											<input
												id="username"
												className="form__control w-100 shadow-sm"
												type="text"
												placeholder="username"
												{...register("username", { required: true })}
											/>
											<label htmlFor="username">Username</label>
										</div>
									</div>
									<div className="col-12">
										<div className="has-float-label mb-1">
											<input
												id="email"
												className="form__control w-100 shadow-sm"
												type="email"
												placeholder="email@example.com"
												{...register("email", { required: true })}
											/>
											<label htmlFor="email">Email</label>
										</div>
									</div>
									<div className="col-12">
										<div className="has-float-label mb-1">
											<input
												id="phone"
												className="form__control w-100 shadow-sm"
												type="tel"
												maxLength="18"
												placeholder="000 000 0000"
												{...register("phoneNumber", { required: true })}
											/>
											<label htmlFor="phone">Phone</label>
										</div>
									</div>
								</>
							)}

							{level === 3 && (
								<>
									<div className="col-12">
										<div className="has-float-label mb-1">
											<input
												id="password"
												className="form__control w-100 shadow-sm"
												type="password"
												placeholder="password"
												{...register("password", { required: true })}
											/>
											<label htmlFor="password">Password</label>
										</div>
									</div>
									<div className="col-12">
										<div className="has-float-label mb-1">
											<input
												id="confirmPassword"
												className="form__control w-100 shadow-sm"
												type="password"
												placeholder="confirm password"
												{...register("confirmPassword", { required: true })}
											/>
											<label htmlFor="confirmPassword">Confirm Password</label>
										</div>
									</div>
									<Link className="mr-5" onClick={(e) => decreaseLevel()}>
										Back
									</Link>
									<PrimaryButton type="submit" disabled={busy} classes="mt-4">
										{label}
									</PrimaryButton>
								</>
							)}
						</form>

						{level !== 3 && (
							<p className="mt-4">
								{level !== 1 && (
									<Link className="mr-5" onClick={(e) => decreaseLevel()}>
										Back
									</Link>
								)}
								<Link onClick={() => increaseLevel()}>Next</Link>
							</p>
						)}

						<div className="mt-4">
							Already have account? <Link to="/login">Login</Link>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export { SignUp };
