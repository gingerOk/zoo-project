const LoginForm = () => {
return (
    <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="text" id="inputPassword" className="form-control" placeholder="Password" required/>
    </form>
)
}

export default LoginForm