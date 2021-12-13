import React, { useEffect } from "react"
import { useState } from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'


const SignIn = (props) => {

useEffect(() => {
    console.log("nameprops:",props)
}, [props])


    const [signUser, setSignUser] = useState ({
        email: "", 
        password: "",
    })

    const inputHandler = (e) => {
        setSignUser({
            ...signUser, 
            [e.target.name]: e.target.value
        })
    }

    const submitForm = () => {
        props.signIn(signUser)
        console.log("hola:",signUser)
    }


        return (
            <>
            {/* <h1 className="text-light">Welcome {props.userName}</h1> */}
            <div className="bg-signin">
                <div id="login-box">
                    <div class="container-form-signin">
                        <h1 className="h1-signin">Sign in </h1>

                        <input onChange={inputHandler} type="text" name="email" placeholder="E-mail" />
                        <input onChange={inputHandler} type="password" name="password" placeholder="Password" />
                        <input type="submit" onClick={submitForm} name="signup_submit" value="Sign in" />
                    </div>
                </div>
            </div>
            </>
        )
    }

const mapStateToProps = state => {
    return {
        userName: state.authReducer.userName,
        email: state.authReducer.email,
        userImage: state.authReducer.userImage
    }
}

const mapDispatchToProps = {
    signIn: authActions.signIn
}

export default connect (mapStateToProps, mapDispatchToProps) (SignIn)