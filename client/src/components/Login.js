import React, { useEffect, useState } from "react";
import Button from "./elements/Button";
import SignUp from "./SignUp";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../store/actions/authAction";

function Login({ setModal}) {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const err = useSelector((state) => state.error);
  // let errMsg = "";

  // const fix = ()=>{
  //     setErrMsg("")
  //     setErrMsg(auth.success_msg);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrMsg("Please fill all the inputs");
      return false;
    }

    const sign_in = {
      password,
      email,
    };
    dispatch(signin(sign_in));

    // fix()
    console.log(sign_in);
  };

  // errMsg = auth.msg || err.msg
  useEffect(()=>{
      if(auth.msg || err.msg){
        setErrMsg(auth.msg || err.msg);
      } 
     
  }, [auth.msg, err.msg])
  if (auth.is_authenticated) {
    
    setTimeout(() => {
        setErrMsg("");
      setModal(false);
    }, 1000);
  }

  return (
    <>
      <div className="modal">
        <div className="modal_inner">
          <div className="login">
            <div className="login_form_div">
              <div className="form_intro">
                {errMsg && (
                  <p className={auth.msg ? "display_msg" : "display_msg_err"}>
                    {errMsg ? errMsg : ""}
                  </p>
                )}
                <h3>Login</h3>
                <p>Login is required to continue</p>
              </div>

              <form className="" onSubmit={handleSubmit}>
                <div className="form_style">
                  <input
                    type="email"
                    placeholder="Email:"
                    value={email}
                    name="email "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form_style">
                  <input
                    type="password"
                    placeholder="Password:"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form_footer">
                  <p className="form_footer_left">
                    <input
                      type="checkbox"
                      value={checkbox}
                      name="password"
                      onChange={(e) => setCheckbox(!checkbox)}
                    />
                    <label htmlFor="">Keep logged in</label>
                  </p>
                </div>

                <div className="form_btn">
                  <Button text="Login now" />
                </div>
              </form>
              <div className="form_footer">
                <p className="form_footer_right">
                  Don't have an account yet?{" "}
                  <span onClick={() => setOpenSignup(true)}>Sign up </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div onClick={() => setModal(false)} className="close_modal">
          {/* <i className="fas fa-times"></i> */}
        </div>
      </div>
      {openSignup && <SignUp setModal={setModal} />}
    </>
  );
}

export default Login;
