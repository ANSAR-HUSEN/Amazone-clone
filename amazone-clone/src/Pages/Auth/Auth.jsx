import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { Link ,useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import { ClipLoader } from "react-spinners";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Loading, setLoading] = useState({
    signUp: false,
    signIn: false,
  });
  const [Error, setError] = useState("");
  const navigate = useNavigate()
  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);
  const authHandler = async (e) => {
    e.preventDefault();

    if (e.target.name == "signIn") {
      setLoading({ ...Loading, signIn: true });
      signInWithEmailAndPassword(auth, Email, Password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...Loading, signIn: false });
          navigate("/")
        })
        .catch((err) => {
          setLoading({ ...Loading, signIn: false });
          setError(err.message);
        });
    } else {
      setLoading({ ...Loading, signUp: true });
      createUserWithEmailAndPassword(auth, Email, Password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...Loading, signUp: false });
          navigate("/")
        })
        .catch((err) => {
          setLoading({ ...Loading, signUp: false });
          setError(err.message);
        });
    }
  };
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to='/'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            name="signIn"
            type="submit"
            onClick={authHandler}
            className={classes.login__signinbtn}
          >
            {Loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing in you agree to the AMAZON FAKE CLONE conditions of Use &
          Sale.Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
        {/* create acc btn */}
        <button
          name="signUp"
          type="submit"
          onClick={authHandler}
          className={classes.login__registrationbtn}
        >
          {Loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>

        {Error && (
          <small style={{ paddingTop: "7px", color: "red" }}>{Error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
