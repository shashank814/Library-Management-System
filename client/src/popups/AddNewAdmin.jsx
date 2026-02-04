import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addNewAdmin} from '../store/slices/userSlice'
import closeSquare from '../assets/closeSquare.png'
import key from '../assets/key.png'
import {toggleAddNewAdminPopup} from '../store/slices/popUpSlice'
import placeholder from '../assets/placeholder.jpg'

const AddNewAdmin = () => {

  const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.user)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [avatar, setAvatar] = useState(null)
  const [avatarPreview, setAvatarPreview] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarPreview(reader.result)
      };
      reader.readAsDataURL(file);
      setAvatar(file);
    }
  };

  const handleAddNewAdmin = (e) => {
     e.preventDefault();
     const formData = new FormData();
     formData.append("name", name);
     formData.append("email", email);
     formData.append("password", password);
     formData.append("avatar", avatar);
     dispatch(addNewAdmin(formData))
  }
  return (
    <>
      <div className='fixed inset-0 bg-black/60 p-5 flex items-center justify-center z-50'>
        <div className='w-full bg-white rounded-lg shadow-lg md:w-1/3'>
        <div className='p-8'>
           <header className='flex justify-between items-center mb-7 pb-5 border-b-[1px] border-black'>
            <div className='flex items-center gap-3'>
            <img src={key} alt="" className='bg-gray-300 p-5 rounded-lg cursor-pointer' />
            <h3 className='text-xl font-bold'>Add New Admin</h3>
            </div>
            <img src={closeSquare} alt="" onClick={()=> dispatch(toggleAddNewAdminPopup())} className='cursor-pointer'/>
           </header>

           <form onSubmit={handleAddNewAdmin}>
            {/* Avatar Selected */}
            <div className='flex flex-col items-center mb-6'>
              <label htmlFor='avatarInput' className='cursor-pointer'>
                <img src={avatarPreview ? avatarPreview : placeholder} alt="" className='w-24 h-24 rounded-full object-cover' />
                <input type="file" id='avatarInput' accept='image/*' className='hidden' onChange={handleImageChange} />
              </label>
            </div>

            <div className='mb-4'>
              <label htmlFor="block text-gray-900 font-medium">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Admin's Name" className='w-full px-4 py-2 border border-gray-300 rounded-md '/>
            </div>

            <div className='mb-4'>
              <label htmlFor="block text-gray-900 font-medium">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Admin's Email" className='w-full px-4 py-2 border border-gray-300 rounded-md '/>
            </div>

            <div className='mb-4'>
              <label htmlFor="block text-gray-900 font-medium">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Admin's Password" className='w-full px-4 py-2 border border-gray-300 rounded-md '/>
            </div>

            {/* Button */}
            <div className='flex justify-end space-x-4'>
              <button type='button' onClick={() => dispatch(toggleAddNewAdminPopup())} className='px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300'>Close</button>

              <button type='submit' disabled={loading} className='px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800'>Add</button>
            </div>

           </form>
 
        </div>
        </div>
      </div>
    </>
  )
}

export default AddNewAdmin
