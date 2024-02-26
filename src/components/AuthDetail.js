import React, { useEffect, useState } from 'react'
import {auth} from '../Firebase'
import { onAuthStateChanged } from 'firebase/auth';

function AuthDetail() {
  const [authUser, setAuthUser] = useState(null);
  
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if(user){
            setAuthUser(user)
        }
        else{
            setAuthUser(null);
        }
    });
     return () => {
        listen();
     } 
  }, []);
  
  
  return (
    <div>{ authUser ? <p>{`Signed In ${authUser.email}`}</p> : <p>Signed Out</p>}</div>
  )
}

export default AuthDetail