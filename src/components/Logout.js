import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from './UserSlice'
import {selectValue} from './UserSlice'

function Logout(props) {
    const dispatch=useDispatch()
    const value=useSelector(selectValue)

    const handleLogout=(e)=>{
        e.preventDefault();

        dispatch(logout({
            name:'null',
            pwd:'null',
            LoggedIn:false
        }))
    }

    return (
        <div>
            <br/><br/>welcome <span>{value.name}</span><br/><br/>
            <button className="btn btn-info" onClick={(e)=>handleLogout(e)}>logout</button>
        </div>
    );
}

export default Logout;