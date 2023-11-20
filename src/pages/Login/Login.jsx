import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
  const [disabled, setDisabled] = useState(true)
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    loadCaptchaEnginge(6); 
  },[])

  const handleLogin = e => {
    e.preventDefault()
    const form = e.target 
    const email = form.email.value 
    const password = form.password.value 
    console.log(email, password)
    signIn(email, password)
      .then(result => {
          const user = result.user
          console.log(user)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Login Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, {replace: true})
      })
      .catch(error => console.log(error))
  }

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value
    if(validateCaptcha(user_captcha_value)){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  }

  return (
    <>
    <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" required/>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover"> Forgot password?</a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input onBlur={handleValidateCaptcha} type="text"  name="captcha" placeholder="Type the captcha above" className="input input-bordered"/>
              
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} className="btn bg-yellow-500" type="submit" value="Login" />
            </div>
          </form>
          <p className='text-center text-yellow-500 mb-5'><small>New Here? <Link className='font-bold' to='/register'>Create a New Account</Link> </small></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
