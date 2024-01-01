import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='my-10'>
      <div className='bg-slate-200 px-10'>
        <h2 className='text-2xl font-bold text-center pt-5 pb-3 text-red-900 '>Get In Touch</h2>
        <form>
        <input 
        className='p-2  outline-none text-xl mb-5'
        type="text"
        name='name'
        placeholder='Name'
        />
        <input 
        className='p-2  outline-none text-xl mb-5'
        type="email"
        name='email'
        placeholder='Email'
        />
        <input 
        className='p-2 w-[90%] h-[200px]  outline-none text-xl mb-5'
        type="text"
        name='message'
        placeholder='Message'
        />

        <button className='bg-red-900 text-xl font-semibold text-white p-2 mb-10 w-1/2 ml-[25%] rounded-full ' type="Submit">LogIn</button>
        </form>
      </div>

      <div className="bg-red-900 text-white py-10 px-5">
        <h1 className="text-2xl font-bold text-center pb-2">Contact Us</h1>
        <div className="w-[95%]">
           <p className="flex"><span className="bg-slate-100 rounded-full p-2 h-[50%] text-red-900 mr-2 mb-6"><FaLocationDot/></span> <b className="mr-2">Address:</b>Alamgari Bazar Srinagar, Jammu and Kashmir, 190011</p>
           <p className="flex"><span className="bg-slate-100 rounded-full p-2 h-[50%] text-red-900 mr-2 mb-4 "><FaPhoneAlt/></span><b>Phone: </b>+91 76654877653</p>
           <p className="flex"><span className="bg-slate-100 rounded-full p-2 h-[50%] text-red-900 mr-2 mb-4"><MdEmail/></span><b>Email:</b> ishfaq@aa.com</p>
           <p className="flex"><span className="bg-slate-100 rounded-full p-2 h-[50%] text-red-900 mr- mb-4"><FaGlobe/></span><b>Website:</b> amafhh.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact