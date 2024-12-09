import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const ContactMe = () => {
    return (
        <div className="text-gray-200 pb-10 ">
            <div>
                <h1 className="w-auto  lg:w-[22%] text-lg lg:text-5xl font-bold text-center mx-auto my-5 border-b-2 border-dashed pb-4 " >Get in Touch</h1>
            </div>

            <div>

                <div className="border-2 border-gray-700 p-3 lg:p-10 rounded-md w-auto lg:w-[60%] mx-auto ">
                    <div className="w-fit mx-auto">
                        <h1 className="text-xl lg:text-3xl font-bold mb-7">Contact Me For More Info </h1>
                        <div className="space-y-3 ">


                            <div className="flex items-center gap-2">
                                <FaMapLocationDot />
                                <p>Nabinagar , Savar , Dhaka</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaPhoneVolume />
                                <p>
                                    +8801601707200
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdEmail />
                                <p>sunnycse03@gmail.com</p>
                            </div>
                            <div className="p-1 lg:pl-44 pt-7 flex gap-10">
                                <Link to="https://linkedin.com/in/-sunny" > <BsLinkedin className="size-4 lg:size-10" /> </Link>
                                <Link to="https://github.com/ah-sunny" > <FaGithub className="size-4 lg:size-10" /> </Link>

                            </div>


                        </div>
                    </div>

                </div>

                {/* <div className="hero  my-12">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ContactMe;