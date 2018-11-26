import React from 'react';

const Login = () => {
    return (
        <div className="container w-50" id="login">
            <div className="container p-3 border rounded border-dark align-items-center" id="existing-login">
                <form action="/login" method="POST" className="d-flex flex-column">
                    <div className="form-group w-75 mx-auto p-2">
                        <label for="userField">Username</label>
                        <input type="text" name="username" id="userField" className="form-control" placeholder="Enter Username" aria-describedby="userHelp" />
                    </div>
                    <div className="form-group w-75 mx-auto p-2">
                        <label for="passField">Password</label>
                        <input type="text" name="password" id="passField" className="form-control" placeholder="Enter Password" aria-describedby="passHelp" />
                    </div>
                    <button className="btn btn-link btn-outline-dark p-2 mx-auto" type="submit">Login</button>
                </form>
            </div>
            <div className="container d-flex justify-content-around my-3 p-3" id="other-login">
                <button className="btn btn-link btn-outline-dark p-2">Create Account</button>
                <button className="btn btn-link btn-outline-dark p-2">Continue as Guest</button>
            </div>
        </div>
    )
}

export default Login;