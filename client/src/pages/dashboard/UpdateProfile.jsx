import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext)

  // Redirect to specific location
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const name = data.name
    const photoURL = data.photoURL
    updateUserProfile(name, photoURL)
      .then(() => {
        // alert('Profile updated successfully')
        toast.success('User Profile Update successfully', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.error('Error updating profile:', error)
      })
  }

  return (
    <div className='h-screen flex justify-center items-center font-poppins'>
      <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
          <h3 className='text-center text-lg font-medium text-neutral-600'>
            Update Profile
          </h3>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              placeholder='Enter your name'
              className='input input-bordered'
              {...register('name')}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Upload Photo</span>
            </label>
            <input
              type='text'
              placeholder='Upload photo url'
              className='input input-bordered'
              {...register('photoURL')}
            />
            {/* Input upload image */}
            {/* <input type="file" className="file-input file-input-bordered w-full max-w-xs" /> */}
          </div>
          <div className='form-control mt-6'>
            <button className='btn bg-primaryBlue text-white'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile
