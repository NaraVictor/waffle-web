import { DefaultButton, PrimaryButton } from "../../components";
import logo from "../../static/img/logo.png";

const Login = (props) => {
	return (
		<section className="container">
			<div className="row login">
				<div className="col-md-6 col-12 order-md-2 mb-3">
					<article>
						<div>
							<img src={logo} alt="Company Logo" className="login__logo" />
						</div>
						<form method="post" className="login__form">
							<div>
								<small>email</small>
								<input
									type="text"
									placeholder="email or username"
									className="d-block"
								/>
							</div>
							<div>
								<small>password</small>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="password"
									className="d-block"
								/>
							</div>
							<DefaultButton>Login</DefaultButton>
						</form>
					</article>
				</div>
				<div className="col-md-6 col-12 order-md-1">
					<article className="login__ad">
						Login Page
						<div>
							<PrimaryButton>Join Us</PrimaryButton>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export { Login };
