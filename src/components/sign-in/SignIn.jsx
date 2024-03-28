import React, { useState } from 'react';

const SignIn = () => {

    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function handleSignIn(e) {
        e.preventDefault();
        console.log(email)
        console.log(username)
        console.log(password)
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handleUsername(e) {
        setUsername(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }

    return (
        <div>
            <h3 className='text-center font-extrabold text-2xl my-8'>eBookVarse</h3>
            <div className='flex items-center justify-center'>
                <div className="max-w-[400px] border p-10 border-base-300 bg-base-200 rounded-md shadow-xl">
                    <form onSubmit={handleSignIn} className='*:mb-3'>
                        <input
                            onChange={handleEmail}
                            className="input input-bordered grow flex w-80 items-center gap-2"
                            type="email"
                            required
                            placeholder="Email"
                        />
                        <input
                            className="input input-bordered grow flex w-80 items-center gap-2"
                            type="text"
                            required
                            placeholder="Username"
                            onChange={handleUsername}
                        />
                        <label >
                            <input
                                className="input input-bordered  flex w-80 items-center gap-2"
                                type="password"
                                required
                                placeholder='Password'
                                onChange={handlePassword}
                            />
                            <p className='text-sm text-end text-primary'>Forgot Password?</p>
                        </label>
                        <input
                            className="btn btn-primary w-full mt-3"
                            type="submit"
                            value="Sign In"
                        />
                    </form>
                    <div className="divider divider-primary">or</div>

                    <div className="flex items-center justify-center">
                        <button className="btn w-full border-base-100 bg-base-100">
                            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                            <span>Sign in with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;