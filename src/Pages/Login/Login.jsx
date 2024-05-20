import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
const Login = () => {
  const location=useLocation()
  console.log(location);
  const navigate=useNavigate()
  const{signIn}=useContext(AuthContext);
  const handleLogin=e=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
   signIn(email,password)
   .then(result=>{
    const user=result.user;
    const logeInUser={email};
    axios.post('http://localhost:5000/jwt',logeInUser,{withCredentials:true})
    .then(res=>{
      console.log(res.data);
      if(res.data.success){
        navigate(location?.state?location?.state:"/")
      }
    })
    console.log(user);
   })
   .catch(error=>console.log(error))
  }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-12">
      <img src={img} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-3xl font-bold text-center">Login now!</h1>
       <form onSubmit={handleLogin}>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className='btn btn-primary' value="login" />
        </div>
       </form>
       <p className='my-4 text-center'>New to Car Doctors? <Link className='text-orange-600 font bold' to={'/signup'}>Sign Up</Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;