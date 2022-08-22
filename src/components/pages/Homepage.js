import React from 'react'
import AuthForm from '../Auth/AuthForm'
import { useContext } from 'react'
import { Routes, Route } from "react-router-dom";
import AuthContext from '../store/auth-context';


const HomePage = () => {
   

  return (
    <>
        <AuthForm />
    </>
  )
}

export default HomePage