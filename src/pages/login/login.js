
import React from 'react';
import { Login } from '../../components/login';

const LoginPage =(props)=>{
    return (
        <div className="container">
          <Login  history ={props.history}/>
        </div>
      );
}

export default LoginPage;