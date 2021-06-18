import React from "react";
import { Link } from "react-router-dom";

const Login2 = (props) => {
	return (
		<section className="section section-shaped section-lg">
			<div className="shape shape-style-1 bg-gradient-default">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="container pt-lg-7">
				<div className="row justify-content-center">
					<div className="col-lg-5">
						<div className="card bg-secondary shadow border-0">
							<div className="card-header bg-white pb-5">
								{/* <div className="text-muted text-center mb-3"><small>Sign in with</small></div>
              <div className="btn-wrapper text-center"> */}
								{/* <a href="#" className="btn btn-neutral btn-icon">
                  <span className="btn-inner--icon"><img src="../assets/img/icons/common/github.svg" /></span>
                  <span className="btn-inner--text">Github</span>
                </a>
                <a href="#" className="btn btn-neutral btn-icon">
                  <span className="btn-inner--icon"><img src="../assets/img/icons/common/google.svg" /></span>
                  <span className="btn-inner--text">Google</span>
                </a>
              </div> */}
							</div>
							<div className="card-body px-lg-5 py-lg-5">
								<div className="text-center text-muted mb-4">
									<small>Or sign in with credentials</small>
								</div>
								<form>
									<div className="form-group mb-3">
										<div className="input-group input-group-alternative">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i className="ni ni-email-83"></i>
												</span>
											</div>
											<input
												className="form-control"
												placeholder="Email"
												type="email"
											/>
										</div>
									</div>
									<div className="form-group focused">
										<div className="input-group input-group-alternative">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i className="ni ni-lock-circle-open"></i>
												</span>
											</div>
											<input
												className="form-control"
												placeholder="Password"
												type="password"
											/>
										</div>
									</div>
									<div className="custom-control custom-control-alternative custom-checkbox">
										<input
											className="custom-control-input"
											id=" customCheckLogin"
											type="checkbox"
										/>
										<label
											className="custom-control-label"
											for=" customCheckLogin">
											<span>Remember me</span>
										</label>
									</div>
									<div className="text-center">
										<button type="button" className="btn btn-primary my-4">
											Sign in
										</button>
									</div>
								</form>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-6">
								<Link to="#" className="text-light">
									<small>Forgot password?</small>
								</Link>
							</div>
							<div className="col-6 text-right">
								<Link to="#" className="text-light">
									<small>Create new account</small>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export { Login2 };
