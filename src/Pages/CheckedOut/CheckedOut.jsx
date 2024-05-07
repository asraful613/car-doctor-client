import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckedOut = () => {
    const {user}=useContext(AuthContext)
    const service=useLoaderData()
    const {title,_id,price}=service;
    const handleCheckOutOrder=e=>{
       e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const date=form.date.value;
        const email=user?.email;
        const order={
            customerName:name,
            email,
            date,
            service:_id,
            price:price
        }
        console.log(order);
    }
    return (
        <div>
            <h1 className="text-center text-3xl">Book Service: {title}</h1>
           
      <form onSubmit={handleCheckOutOrder} className="card-body">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" defaultValue={user?.displayName}  name="name"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email"defaultValue={user?.email}  name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due amount</span>
          </label>
          <input type="text" 
          defaultValue={'$'+price}
          className="input input-bordered" required />
        </div>
      </div>
        <div className="form-control mt-6">
          <input className="btn btn-secondary btn-block" type="submit" value="Order Confirm" />
        </div>
      </form>
    </div>
    );
};

export default CheckedOut;