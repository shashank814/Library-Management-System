import React, { useEffect } from 'react'
import logoWithTitle from '../assets/logoWithTitle.png';
import logoutIcon from '../assets/logoutIcon.png'
import dashboardIcon from '../assets/dashboardIcon.png'
import book from '../assets/book.png'
import catalog from '../assets/catalog.png'
import users from '../assets/users.png'
import settingWhite from '../assets/settingWhite.png'
import closeIcon from '../assets/closeIcon.png'
import { RiAdminFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { logout, resetAuthSlice } from '../store/slices/authSlice.js'
import { addNewAdminPopup, toggleAddNewAdminPopup, toggleSettingPopup } from '../store/slices/popUpSlice.js'
import AddNewAdmin from '../popups/AddNewAdmin.jsx'
import {toast} from 'react-toastify'

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, setSelectedComponent }) => {
  const dispatch = useDispatch()

  const { addNewAdminPopup } = useSelector(state => state.popup)

  const { loading, error, message, user, isAuthenticated } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
  };

  useEffect(() => {
    if(error) {
      toast.error(error);
      dispatch(resetAuthSlice())
    }
    if(message) {
      toast.success(message);
      dispatch(resetAuthSlice())
    }
  }, [dispatch, isAuthenticated, error, loading, message])
  
  return (
  <>  
    <aside className={`${isSidebarOpen ? "left-0" : "-left-full"} z-10 transition-all duration-700 md:relative md:left-0 flex w-64 bg-black text-white flex-col h-full`} style={{position: "fixed"}}>
       
       <div className='px-6 py-4 my-8'>
          <img src={logoWithTitle} alt="logo" />
       </div>

       <nav className='flex-1 px-6 space-y-2'>

        <button className='w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2' onClick={() => setSelectedComponent("Dashboard")}>
          <img src={dashboardIcon} alt="" /> <span>Dashboard</span>
        </button>

        <button className='w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2' onClick={() => setSelectedComponent("Books")}>
          <img src={book} alt="" /> <span>Books</span>
        </button>

        {
          isAuthenticated && user ?. role === "Admin" && (
            <>
            
            <button className='w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2' onClick={() => setSelectedComponent("Catalog")}>
            <img src={catalog} alt="" /> <span>Catalog</span>
            </button>

            <button className='w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2' onClick={() => setSelectedComponent("Users")}>
            <img src={users} alt="" /> <span>Users</span>
            </button>

            <button className='w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2' 
            onClick={() => dispatch(toggleAddNewAdminPopup())}
            >
            <RiAdminFill className='h-6 w-6' /> <span>Add New Admin</span>
            </button>

            
             </>
           )}

        {
          isAuthenticated && user ?. role === "User" && (
            <>

            <button className='w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2' onClick={() => setSelectedComponent("My Borrowed Books")}>
            <img src={catalog} alt="" /> <span>My Borrowed Books</span>
            </button>

            </>
          )}

          <button className='w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2'
           onClick={() => dispatch(toggleSettingPopup())}
           >
          <img src={settingWhite} alt="" /> <span>Update Credentials</span>
          </button>

       </nav>

       <div className='px-6 py-4'>

       <button className='py-2 font-medium text-center bg-transparent rounded-md hover:cursor-pointer flex items-center justify-center space-x-5 mx-auto w-fit' onClick={handleLogout}>
        <img src={logoutIcon} alt="" /> <span>Logout</span>
       </button>
       <img src={closeIcon} alt="" onClick={()=>setIsSidebarOpen(!isSidebarOpen)} className='h-fit w-fit absolute top-0 right-4 mt-4 block md:hidden'/>
       </div>

    </aside>
     {addNewAdminPopup && <AddNewAdmin />}
  </>  
  )
}

export default Sidebar
