import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 
'react-redux'
import users from '../assets/users.png'
import settingWhite from '../assets/settingWhite.png'

const Header = () => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth)
    const [currentTime, setCurrentTime] = useState("")
    const [currentDate, setCurrentDate] = useState("")

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();

            const hours = now.getHours()% 12 || 12;
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const ampm = now.getHours() >= 12 ? "PM" : "AM";
            setCurrentTime(`${hours} : ${minutes} : ${ampm}`)

            const options = {month: "short", date: 
                "numberic", year: "numeric"
            };
            setCurrentDate(now.toLocaleDateString("en-US", options))
        };

        updateDateTime();

        const interValId = setInterval(updateDateTime, 1000);

        return () => clearInterval(interValId)
    }, [])

  return (
    <>
      <Header className="absolute top-0 bg-white w-full py-4 px-6 left-0 shadow-md flex justify-between items-center">
         
         {/* LEFT SIDE */}

         <div className='flex items-center gap-2'>
            <img src={users} alt="" className='w-8 h-8' />

            <div className='flex flex-col'>
                <span className='text-sm font-medium sm:text-lg lg:text-xl sm:font-semibold '>
                    {user && user.name}
                </span>
                <span className='text-sm font-medium sm:text-lg sm:font-semibold'>
                    {user && user.role}
                </span>
                <span>Admin</span>
            </div>
         </div>

         {/* RIGHT SIDE */}
         <div className='hidden md:flex items-center gap-2'>
            <div className='flex flex-col text-sm lg:text-base items-end font-semibold'>
                <span>{currentTime}</span>
                <span>{currentDate}</span>
            </div>
            <span className='bg-black h-14 w-[2px]'>
                <img src={settingWhite} alt="" />
            </span>
         </div>
      </Header>
    </>
  )
}

export default Header
