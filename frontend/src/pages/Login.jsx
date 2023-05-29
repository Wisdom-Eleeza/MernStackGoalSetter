import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
function Login () {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        //key value which is set to name={name}
        [e.target.name]: e.target.value,
    }))
  };
  const onSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login 
        </h1>
        <p>Login and Start Setting Goals</p>
      </section>

      <section className="form">
        <div className="form-group">
          <form onSubmit={onSubmit}>
            <input
              type="email "
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email please"
              password
              onChange={onChange}
            />
          </form>
        </div>
        <div className="form-group">
          <form>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              onChange={onChange}
            />
          </form>
        </div> 
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </div>
      </section>
    </>
  );
}

export default Login ;
