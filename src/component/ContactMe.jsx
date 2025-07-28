// import { BsLinkedin } from "react-icons/bs";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const ContactMe = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c258c0f4-9700-423f-bc2b-68694d1b3be7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };





  return (
    <div className="text-black dark:text-gray-200 pb-10 ">
      <div>
        <h1 className="w-auto  lg:w-[30%] text-2xl lg:text-4xl font-bold text-center mx-auto my-5 border-b-2 border-dashed pb-4 ">
          Get
          <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-wide  "> in Touch</span>
        </h1>
      </div>

      <div>
        <div className="border-2 border-gray-700 p-0 lg:p-10 rounded-md w-auto lg:w-[90%] mx-auto mt-14 ">
          {/* <h1 className="text-xl lg:text-3xl font-bold mb-7">
            Contact Me For More Info{" "}
          </h1> */}


          <div className="w-full mx-auto  flex flex-col lg:flex-row gap-5 justify-between">

          
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2.5,
                ease: "easeOut",

              }}
              viewport={{ once: true, amount: 0.15 }} // triggers once when 20% is visible

              className="w-full space-y-3 pt-4 ">

              <div className="space-y-0.5 p-4 gap-2 border-2 border-gray-200 rounded-md bg-[#FDDD5F1A] ">
                <FaPhoneVolume className="text-green-800 size-7 lg:size-11" />
                <p className="font-thin text-xs lg:text-sm   ">Phone Number :</p>
                <p className="text-base lg:text-lg">(+880) 1601707200 <span className="font-thin text-xs">(whatsapp)</span></p>
              </div>
              <div className="space-y-0.5 p-4 gap-2 border-2 border-gray-200 rounded-md bg-[#2d75222b]">
                <MdEmail className="text-yellow-700 size-7 lg:size-11" />
                <p className="font-thin text-xs lg:text-sm  ">Email :</p>
                <p className="text-base lg:text-lg" >sunnycse03@gmail.com</p>
              </div>
              <div className="space-y-0.5 p-4 gap-2 border-2 border-gray-200 rounded-md bg-[#629CF31A]">
                <FaMapLocationDot className="text-black dark:text-gray-300 size-7 lg:size-11" />
                <p className="font-thin text-xs lg:text-sm  ">Location :</p>
                <p className="text-base lg:text-lg">Nabinagar, Savar, Dhaka</p>
              </div>


              <div className=" pt-3 flex justify-center gap-6">
                <Link to="https://linkedin.com/in/-sunny">
                  {" "}
                  <BsLinkedin className="size-4 lg:size-8 text-[#0A66C2] bg-white rounded" />{" "}
                </Link>
                <Link to="https://github.com/ah-sunny">
                  {" "}
                  <FaGithub className="size-4 lg:size-8" />{" "}
                </Link>
              </div>
              <p className="font-mono text-sm flex justify-center tracking-[.35em]">Connect with me </p>
            </motion.div>

            {/* contact for */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2.5,
                ease: "easeOut",

              }}
              viewport={{ once: true, amount: 0.15 }} // triggers once when 20% is visible

              className="w-full  border-t-4 rounded-3xl border-red-900  p-3">
              <div className="hero  text-black">
                <div className="card bg-base-200 w-full shrink-0 shadow-2xl">


                  <form onSubmit={onSubmit} className="card-body ">
                    <h1 className="text-3xl lg:text-4xl mb-10 text-black ">Send Message</h1>
                    <div className="form-control  mb-2.5 text-black ">
                      <label className="label">
                        <span className="label-text text-sm lg:text-md text-sky-600 ">Full Name : </span>
                      </label>
                      <label className="floating-label mt-2  ">
                        <span >Name</span>
                        <input type="text" name="name" placeholder="type your name" className="input w-full  border-b-4 focus:outline-none " required />
                      </label>
                    </div>

                    <div className="form-control mb-2.5 text-black  ">
                      <label className="label">
                        <span className="label-text text-md text-sky-600 ">Email Address : </span>
                      </label>
                      <label className="floating-label mt-2 ">
                        <span className=" ">Your Mail</span>
                        <input type="text" name="email" placeholder="mail@site.com" className="input  border-b-4 w-full focus:outline-none " required />
                      </label>
                    </div>

                    <div className="form-control mb-4 text-black ">
                      <label className="label">
                        <span className="label-text text-md text-sky-600 ">Your Message : </span>
                      </label>
                      <label className="floating-label mt-2  ">
                        <span >message</span>
                        <textarea
                          rows="4"
                          name="message"
                          placeholder="Type your text here..."
                          className="textarea textarea-bordered border-b-4  w-full focus:outline-none " required
                        ></textarea>
                        {/* <input type="text" placeholder="type your message" className="textarea h-36 input input-lg focus:outline-none " /> */}
                      </label>
                    </div>
                    <div className="form-control">
                      <button type="submit" className="btn btn-primary">send</button>
                    </div>
                  </form>
                  <span>{result}</span>
                </div>
              </div>
            </motion.div>



          </div>
        </div>
      </div>




    </div>
  );
};

export default ContactMe;
