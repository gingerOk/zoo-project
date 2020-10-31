const RegisterForm = () => {
    return (
        <form className="form-signup">
            <h1 className="h3 mb-3 font-weight-normal">Please signup yourself</h1>
            <label htmlFor="inputEmail" className="mt-2">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
            <label htmlFor="inputPassword" className="mt-2">Password</label>
            <input type="text" id="inputPassword" className="form-control" placeholder="Password" required/>
            <label htmlFor="confirmPassword" className="mt-2">Confirm Password</label>
            <input type="text" id="confirmPassword" className="form-control" placeholder="Confirm Password" required/>
        </form>
    )
}

export default RegisterForm