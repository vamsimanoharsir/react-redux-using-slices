import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserSlice from './UserSlice';
import {login} from './UserSlice'

function Form(props) {

    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [pwd,setPwd]=useState('')
    const [email,setEmail]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();

        dispatch(login({
            name:name,
            pwd:pwd,
            email:email,
            LoggedIn:true
        }))
    }

    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <center>
                    <br /><br /><span>login form</span><br /><br />
                    <input className='btn btn-info' type="text" placeholder='enter name' onChange={(e) => setName(e.target.value)} /><br /><br />
                    <input className='btn btn-info' type="text" placeholder='enter email' onChange={(e) => setEmail(e.target.value)} /><br /><br />
                    <input className='btn btn-info' type="password" placeholder='enter password' onChange={(e) => setPwd(e.target.value)} /><br /><br />
                    <button type='submit'>submit</button>
                </center>
            </form>
        </div>
    );
}

export default Form;