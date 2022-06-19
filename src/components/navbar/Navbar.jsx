import { useState, useEffect } from "react";
import { MdSearch, MdNotifications, MdKeyboardArrowDown } from "react-icons/md";

import { topbarLinks } from "../../data/topbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{
    window.onscroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
    }
    return ()=> window.onscroll = null
  })

  return (
    <nav className={`${isScrolled ? 'bg-main-color' : 'gradient-navbar'} transition-all duration-500 fixed w-full top-0 z-[999] text-sm text-white`}>
      <div className="px-[50px] h-[70px] flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center">
          <img className="h-[35px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"  alt="logo" />
      
          <ul className="flex items-center space-x-4 ml-10">
           {topbarLinks.map((link) => {
             return <li className="font-medium cursor-pointer" key={link.id}>{link.name}</li>;
           })}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <MdSearch className="text-xl"/>
          <div >KID</div>
          <MdNotifications className="text-xl"/>

          {/* Profile */}
          <div className="relative group flex items-center cursor-pointer space-x-2">
            <img
            className="h-[35px] w-[35px] rounded-[5px] object-cover"
              src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="avatar"
            />
            <MdKeyboardArrowDown className="text-xl"/>

            {/* Show options on Hover */}
            <div className="cursor-pointer hidden group-hover:block absolute bg-main-color -bottom-20 rounded-md overflow-hidden">
              <option className="py-2.5 px-4 hover:bg-gray-500">Settings</option>
              <option className="py-2.5 px-4 hover:bg-gray-500">Logout</option>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar