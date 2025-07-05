
import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
 
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";




const Register = () => {
    const navigate = useNavigate()

    const {createUser} =useContext(AuthContext);
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, password, photo, email });

        if (name.length < 5) {
            setNameError('Name should be more then 5 character')
            return;
        } else {
            setNameError('')
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{7,}$/;

        setPasswordError('')

        if (!passwordPattern.test(password)) {
            setPasswordError('Password should have one uppercase, one lowercase, and be longer than 6 characters');
        }
        createUser( email, password)
            .then((result) => {
                console.log(result)
                toast.success('Log in Successfully!');
                form.reset()
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.message;

                toast.error(errorCode);
            })
    }

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container  flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">

                <div className="flex  -mt-10 items-center justify-center w-[250px] md:w-[300px] lg:w-[500px] ">
                    <img src="/register.jpg" />
                </div>

                {/* form */}

                <div className="w-full max-w-md p-8 -mt-10 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-center"> Sign Up Now!</h1>
                    <form onSubmit={handleRegister} noValidate="" action="" className="space-y-6">
                        {/* name */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">Name</label>
                            <input type="text" name="name" id="username" placeholder="Enter your name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                            {nameError && <p className="text-sm text-red-500" >{nameError}</p>}
                        </div>
                        {/* email */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">E-mail</label>
                            <input type="email" name="email" id="username" placeholder=" Enter your email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                        </div>
                        {/* Photo url */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">Photo</label>
                            <input type="text" name="photo" id="username" placeholder="Your photo" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                        </div>
                        {/* Password */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">Password</label>
                            <input type="password" name="password" id="username" placeholder="Enter password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                            {
                                passwordError && <p className="text-red-500 text-sm">{passwordError}</p>
                            }
                        </div>

                        <button type="submit" className="block btn btn-success w-full p-3 text-center rounded-sm dark:text-gray-50  ">Register Now!</button>
                    </form>


                    <div className="mt-4">
                        <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
                            <Link to='/login' rel="noopener noreferrer" href="#" className="underline  text-blue-500">Sign in</Link>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Register;