/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { toast } from 'react-toastify'

const Modal = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // Redirect to specific location
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  // UseContext
  const { signUpWithGmail, login } = useContext(AuthContext)

  // Login with email and password
  const onSubmit = (data) => {
    const email = data.email
    const password = data.password
    login(email, password)
      .then((res) => {
        const user = res.user
        alert('User login successfully')
        document.getElementById('my_modal_5').close()
        navigate('/') // redirect to the home page after login using email and password
      })
      .catch((error) => {
        const errorMessage = error.message
        setErrorMessage('Please a enter the correct email & password.')
      })
  }

  // Login with Gmail
  const handleLogin = () => {
    signUpWithGmail()
      .then((res) => {
        const user = res.user
        alert('User registered successfully')
        navigate('/') // redirect to home page after login using gmail
        // toast.success('🦄 User registered successfully', {
        //   position: 'top-center',
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: 'colored',
        // })
      })
      .catch((error) => console.log(error))
  }
  return (
    <div>
      <dialog id='my_modal_5' className='modal modal-middle sm:modal-middle'>
        <div className='modal-box'>
          <div className='modal-action flex flex-col mt-0 font-poppins'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='card-body'
              action='dialog'
            >
              <h3 className='text-xl font-medium text-center text-neutral-600'>
                Login Here
              </h3>
              <div className='form-control mb-1'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  {...register('email')}
                />
              </div>
              <div className='form-control mb-1'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  {...register('password')}
                />
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* Erroe Message */}
              {errorMessage ? (
                <p className='text-red-500 text-center italic text-base'>
                  {errorMessage}
                </p>
              ) : null}

              <div className='form-control mt-4'>
                <input
                  type='submit'
                  value='Login'
                  className='btn bg-primaryBlue text-white hover:bg-neutral-400 ease-in duration-300'
                />
              </div>
              <p className='text-center mt-2'>
                Don't have an account?
                <Link
                  to='/signup'
                  className=' text-red-500 underline underline-offset-1 ml-2 hover:text-green-500 ease-in duration-200'
                >
                  Signup Now
                </Link>
              </p>
              <button
                htmlFor='my_modal_5'
                onClick={() => document.getElementById('my_modal_5').close()}
                className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
              >
                ✕
              </button>
            </form>
            <div className='text-center space-x-2 mb-3'>
              <button
                className='btn btn-circle hover:bg-primaryBlue hover:text-white'
                onClick={handleLogin}
              >
                <FaGoogle />
              </button>
              <button className='btn btn-circle hover:bg-primaryBlue hover:text-white'>
                <FaFacebookF />
              </button>
              <button className='btn btn-circle hover:bg-primaryBlue hover:text-white'>
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Modal
