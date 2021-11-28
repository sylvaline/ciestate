import React, { useState } from 'react'
import Button from './elements/Button'
import {useSelector} from 'react-redux'

function NewsLetter() {

    const [contact_sent, setContact_sent] = useState(false)
    const auth = useSelector((state)=>state.auth)

    const [email, setEmail] = useState(auth?.user?.email||"")
    

    const [setErrMsg] = useState('')

    const fix = ()=>{
        setContact_sent(true)
        setErrMsg("")
    }
    

    

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!email ){
            setErrMsg("Please fill your email")
            return false
        }
        

        const new_message = {
            email
        }

        console.log(new_message)

        fix()

        console.log(new_message)
    }

    if(contact_sent){
        return (
            <div className="form_div">
            <div className="sent_message">
          
            <p>Thanks for Subscribing to our NewsLetter</p>
            </div>
        </div>
        )
    } else{
        return (
            
               <div className="form_div newsletter">
                   
               <form className="" onSubmit={handleSubmit}>
              
               <div className="form_style">
               <input style={{color:"white"}} type="email" placeholder="Email:" value={email} name="email " onChange={(e)=>setEmail(e.target.value)} />
               </div>
             
               <div className="form_btn">
               <Button text="Subscribe" />
               </div>
           </form>
           </div>
        )
    }
}

export default NewsLetter
