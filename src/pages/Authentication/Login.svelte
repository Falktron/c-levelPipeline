<script>
	import { auth } from '../../helpers/firebase.js';
	import { navigate } from 'svelte-routing';
	import { user } from '../../helpers/store.js';
	import {
    Row,
    Col,
    CardBody,
    Card,
    Container,
    Form,
    Label,
    Input,
    Button,
  } from "sveltestrap";
	import { Link } from 'svelte-routing';

	let email = 'youremail@company.com';
	let password = '1234';

	// Destructuring to obtain email and password from form via Event
	const handleLoginForm = () => {
		auth.signInWithEmailAndPassword(email, password)
			.then(function (result) {
				let firebaseUser = auth.currentUser;

				if (firebaseUser) {

					let { email } = firebaseUser;

					user.set({ ...$user, loggedIn: true, email });

					navigate('/');
				}
				
			})
			.catch((error) => alert(error.message));
	};
</script>

<div class="home-btn d-none d-sm-block">
	<Link to="/" class="text-dark">
	  <i class="bx bx-home h2" />
	</Link>
  </div>
  <div class="account-pages my-5 pt-sm-5">
	<Container>
	  <Row class="justify-content-center">
		<Col md={8} lg={6} xl={5}>
		  <Card class="overflow-hidden">
			<div class="bg-primary bg-soft">
			  <Row>
				<Col class="col-7">
				  <div class="text-primary p-4">
					<h5 class="text-primary">Welcome Back !</h5>
					<p>Sign in to continue to Skote.</p>
				  </div>
				</Col>
				<Col class="col-5 align-self-end">
				  <img
					src="assets/images/profile-img.png"
					alt=""
					class="img-fluid"
				  />
				</Col>
			  </Row>
			</div>
			<CardBody class="pt-0">
			  <div class="auth-logo">
				<Link to="/" class="auth-logo-light">
				  <div class="avatar-md profile-user-wid mb-4">
					<span class="avatar-title rounded-circle bg-light">
					  <img
						src="assets/images/logoFalktron-h.png"
						alt=""
						class="rounded-circle"
						height="34"
					  />
					</span>
				  </div>
				</Link>
				<Link to="/" class="auth-logo-dark">
				  <div class="avatar-md profile-user-wid mb-4">
					<span class="avatar-title rounded-circle bg-light">
					  <img
						src="assets/images/logo.svg"
						alt=""
						class="rounded-circle"
						height="34"
					  />
					</span>
				  </div>
				</Link>
			  </div>
			  <div class="p-2">
				<div class="form-horizontal">
				  <div class="mb-3">
					<Label for="email" class="form-label">Email</Label>
					<Input
					  type="text"
					  class="form-control"
					  id="email"
					  placeholder="Enter username"
					  bind:value={email}
					/>
				  </div>
  
				  <div class="mb-3">
					<Label class="form-label" for="password">Password</Label>
					<div class="input-group auth-pass-inputgroup">
					  <Input
						type="password"
						class="form-control"
						id="password"
						placeholder="Enter password"
						aria-label="Password"
						aria-describedby="password-addon"
						bind:value={password}
					  />
					  <Button color="light" type="button" id="password-addon"
						><i class="mdi mdi-eye-outline" /></Button
					  >
					</div>
				  </div>
  
				  <div class="form-check">
					<input
					  class="form-check-input"
					  type="checkbox"
					  id="remember-check"
					/>
					<Label class="form-check-label" for="remember-check">
					  Remember me
					</Label>
				  </div>
  
				  <div class="mt-3 d-grid">
					<button
						class="btn btn-primary w-md waves-effect waves-light"
						on:click={handleLoginForm}>Log In</button
					>
				  </div>
  
				  <div class="mt-4 text-center">
					<h5 class="font-size-14 mb-3">Sign in with</h5>
  
					<ul class="list-inline">
					  <li class="list-inline-item">
						<a
						  href={"#"}
						  class="social-list-item bg-primary text-white border-primary"
						>
						  <i class="mdi mdi-facebook" />
						</a>
					  </li>
					  <li class="list-inline-item">
						<a
						  href={"#"}
						  class="social-list-item bg-info text-white border-info"
						>
						  <i class="mdi mdi-twitter" />
						</a>
					  </li>
					  <li class="list-inline-item">
						<a
						  href={"#"}
						  class="social-list-item bg-danger text-white border-danger"
						>
						  <i class="mdi mdi-google" />
						</a>
					  </li>
					</ul>
				  </div>
  
				  <div class="mt-4 text-center">
					<Link to="auth-recoverpw" class="text-muted"
					  ><i class="mdi mdi-lock me-1" /> Forgot your password?</Link
					>
				  </div>
				</div>
			  </div>
			</CardBody>
		  </Card>
		  <div class="mt-5 text-center">
			<p>
			  Don&apos;t have an account ?{" "}
			  <Link to="register" class="fw-medium text-primary">
				{" "}
				Signup now{" "}
			  </Link>{" "}
			</p>
			<p>
			  © {new Date().getFullYear()} Skote. Crafted with{" "}
			  <i class="mdi mdi-heart text-danger" /> by Themesbrand
			</p>
		  </div>
		</Col>
	  </Row>
	</Container>
</div>