import React, { useState } from 'react'
import Button from './elements/Button'
import {useSelector} from 'react-redux'

function ContactForm() {

    const [contact_sent, setContact_sent] = useState(false)
    const auth = useSelector((state)=>state.auth)

    const [email, setEmail] = useState(auth?.user?.email || "" )
    const [phone, setPhone] = useState('')
    const [name, setName] = useState(auth?.user?.username || "" )
    const [message, setMessage] = useState('')

    

    const [errMsg, setErrMsg] = useState('')
    

    const fix = ()=>{
        setContact_sent(true)
        setErrMsg("")
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name || !email || !phone || !message){
            setErrMsg("Please fill all the inputs")
            return false
        }
        

        const new_message = {
            name,
            email,
            phone,
            message
        }

        fix()

        console.log(new_message)
    }

    if(contact_sent){
        return (
            <div className="form_div">
            <div className="sent_message">
            <p>Thanks for contacting us {name}!</p>
            <p>Our agent will contact you as soon as possible.</p>
            </div>
        </div>
        )
    } else{
        return (
            
               <div className="form_div">
                   
               <form className="" onSubmit={handleSubmit}>
               <div className="form_style">
               <input type="text" placeholder="Name:" value={name} name="name " onChange={(e)=>setName(e.target.value)} />
               </div>
               <div className="form_style">
               <input type="email" placeholder="Email:" value={email} name="email " onChange={(e)=>setEmail(e.target.value)} />
               </div>
               <div className="form_style">
               <input type="phone" placeholder="Phone:" value={phone} name=" phone" onChange={(e)=>setPhone(e.target.value)} />
               </div>
               <textarea cols="30" rows="10" placeholder="Message:"value={message} name="message" onChange={(e)=>setMessage(e.target.value)}></textarea>
               {errMsg.length > 0 ? <div className="err_msg"><p><span>*</span>{errMsg}</p></div>:''}
               <div className="form_btn">
               <Button text="Send Message" />
               </div>
           </form>
           </div>
        )
    }
}

export default ContactForm
