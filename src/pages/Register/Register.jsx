import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const Register = () => {
  const axiosPublic = useAxiosPublic()
  const {register, handleSubmit, reset, formState: { errors } } = useForm()
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user 
        console.log(loggedUser)
        updateUserProfile(data.name, data.photoURL)
        .then(()=>{
          const userInfo = {
            name: data.name, 
            email: data.email
          }
          axiosPublic.post('/users', userInfo)
          .then(res => {
            if(res.data.insertedId){
              console.log('user added to the database')
              reset()
              Swal.fire("User Created Successfully!");
              navigate('/')
            }
          })
        })
        .catch(error => console.log(error))
      })
      .then(error => {
        console.log(error)
      })
  }

    
    return (
        <>
        <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered"/>
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="photoURL" {...register("photoURL", { required: true })} name="photoURL" placeholder="PhotoURL" className="input input-bordered"/>
                {errors.photoURL && <span className="text-red-500">PhotoURL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered"/>
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { 
                  required: true, 
                  minLength: 8, 
                  maxLength: 20, 
                  pattern: /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z]).{8}/
                  })} name="password" placeholder="Password" className="input input-bordered"/>
                {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 8 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-500">Password must be less than 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have two uppercase, two lower cose, one special character & two number </p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-yellow-500">Sign Up</button>
              </div>
            </form>
            <p className='text-center text-yellow-500 mb-2'><small>Already Registered? <Link className='font-bold' to='/login'>Go to Login</Link> </small></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
        
    </div>
        </>
    );
};

export default Register;