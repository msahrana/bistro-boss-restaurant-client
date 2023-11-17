import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
  const captchaRef = useRef(null)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    loadCaptchaEnginge(6); 
  },[])

  const handleLogin = e => {
    e.preventDefault()
    const form = e.target 
    const email = form.email.value 
    const password = form.password.value 
    console.log(email, password)
  }

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value
    if(validateCaptcha(user_captcha_value)){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
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
              <input type="text" ref={captchaRef} name="captcha" placeholder="Type the captcha above" className="input input-bordered"/>
              <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs">Validate</button>
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} className="btn bg-yellow-500" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
