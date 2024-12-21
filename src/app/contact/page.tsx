import { FaEnvelope } from "react-icons/fa"

export default function Contact(){
    return(
        <div className="flex flex-col items-center text-center px-4 py-16 space-y-12">
        <button className=" rounded-full h-[80px] border text-white hover:bg-gray-200 hover:text-black">
          CONTACT US
        </button>
        <a
        href="mailto:muqaddas3748@gmail.com"
        target="_blank"
        rel="noopener noreferror"
        className="text-white transition-transform transform"
        style={{ fontSize:"2rem"}}
        >
          <FaEnvelope />
        </a>
        <h1 className="hover:bg-grey-800 text-4xl font-bold h-[5px] hover:text-white">CONTACT NUMBER;</h1>
        <br></br>
        <h1 className="text-2xl font-semibold">03118214401</h1>
        </div>
    )
}