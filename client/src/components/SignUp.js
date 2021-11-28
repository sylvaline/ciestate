import React, {useState} from 'react'
import Button from './elements/Button'
import Login from './Login'
import {useDispatch, useSelector} from 'react-redux'
import {register} from '../store/actions/authAction'

function SignUp({setModal}) {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)

    const [, setErrMsg] = useState('')

    const dispatch = useDispatch()
    const auth = useSelector((state)=>state.auth)

    const fix = ()=>{
        setErrMsg("")
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(!email || !password || !username ){
            setErrMsg("Please fill all the inputs")
            return false
        }
        

        const registe = {
            password,
            email,
            username
            
        }

        dispatch(register(registe))

        fix()
        console.log(registe)
       
        
    }

    if(auth.is_authenticated){
        setModal(false)
        
    }
    return (
        <>
        <div  className="modal">
            <div  className="modal_inner">
            <div className="login">
                <div className="login_form_div">

                    <div className="form_intro">
                    <h3>Sign up</h3>
                    <p>100% free to JOIN</p>
                    </div>
                   
                   <form className="" onSubmit={handleSubmit}>
                   <div className="form_style">
                       
                       <input type="text" placeholder="username:" value={username} name="username " onChange={(e)=>setUsername(e.target.value)} />
                       </div>
                   <div className="form_style">
                       
                   <input type="email" placeholder="Email:" value={email} name="email " onChange={(e)=>setEmail(e.target.value)} />
                   </div>
    
                   <div className="form_style">
                   <input type="password" placeholder="Password:" value={password} name="password" onChange={(e)=>setPassword(e.target.value)} />
                   </div>

                   <div className="form_footer">
                   <p className="form_footer_left"><input type="checkbox"  value={checkbox} name="password" onChange={(e)=>setCheckbox(!checkbox)} />
                   <label htmlFor="">Keep logged in</label>
                   </p>
                   
                   </div>
                   
                   <div className="form_btn">
                   <Button text="Signup"/>
                   </div>

               </form>
               <div className="form_footer">
                    <p className="form_footer_right">Already have an account? <span onClick={()=>setOpenLogin(true)} >Login </span></p>
                   </div>
               </div>
               </div>
            </div>
            <div onClick={()=>setModal(false)} className="close_modal">
                {/* <i className="fas fa-times"></i> */}
                </div>
        </div>
        {
                    openLogin && <Login setModal={setModal} />
                }
        </>
    )
}

export default SignUp
