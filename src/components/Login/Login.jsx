import React from 'react';
import {useForm} from "react-hook-form";

import './Login.scss'

const Login = ({login, error, isFetching}) => {
    const {handleSubmit, register, errors} = useForm();

    const onSubmit = values => {
        login(values.email, values.password)
    };

    return (
        <div className="login">

            <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="login__title">Login</h2>
                <label className="login__label">
                    <p className="login__label-name">Email</p>
                    <input className="login__input" type="email" ref={register({
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })} name="email"/>
                    <span className="login__error"
                          style={errors.email && errors.email.type === 'required' ? {visibility: "visible"} : {visibility: "hidden"}}>This field is required</span>
                    {errors.email && <span className="login__error"
                                           style={errors.email ? {visibility: "visible"} : {visibility: "hidden"}}>{errors.email.message}</span>}
                </label>

                <label className="login__label">
                    <p className="login__label-name">Password</p>
                    <input className="login__input" type="password" ref={register({
                        required: true,
                    })} name="password" autoComplete="on"/>
                    <span className="login__error"
                          style={errors.password && errors.password.type === 'required' ? {visibility: "visible"} : {visibility: "hidden"}}>This field is required</span>
                    <p className="login__error" style={error ? {visibility: "visible"} : {visibility: "hidden"}}>{error.message}</p>
                </label>
                <button className="login__button" type="submit" disabled={isFetching}>Login</button>
            </form>
        </div>
    );
};

export default Login;
