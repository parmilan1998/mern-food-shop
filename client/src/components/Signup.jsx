/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Modal from './Modal'
import { AuthContext } from '../contexts/AuthProvider'
import { toast } from 'react-toastify'

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // Redirect to specific location
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const { createUser } = useContext(AuthContext)

  // Create a new user
  const onSubmit = (data, event) => {
    event.preventDefault()
    const email = data.email
    const password = data.password
    createUser(email, password)
      .then((res) => {
        const user = res.user
        // alert('User created successfully')
        toast.success('🦄 User Registered successfully', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
        document.getElementById('my_modal_5').close()
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error('Registration error:', errorCode, errorMessage)
      })
  }
  return (
    <div className='max-w-md w-full mx-auto shadow-md py-6 rounded-lg flex justify-center my-20'>
      <div className='modal-action flex flex-col mt-0 font-poppins'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='card-body'
          action='dialog'
        >
          <h3 className='text-xl font-medium text-center text-neutral-600'>
            Create Accont
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
          <div className='form-control mt-4'>
            <input
              type='submit'
              value='Sign Up'
              className='btn bg-primaryBlue text-white hover:bg-neutral-400 ease-in duration-300'
            />
          </div>
          <p className='text-center mt-2'>
            Already have an account?
            <button
              onClick={() => document.getElementById('my_modal_5').showModal()}
              className=' text-red-500 underline underline-offset-1 ml-2 hover:text-green-500 ease-in duration-200'
            >
              Login
            </button>
          </p>
          <Link
            to='/'
            className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          >
            ✕
          </Link>
        </form>
        <div className='text-center space-x-2 mb-3'>
          <button className='btn btn-circle hover:bg-primaryBlue hover:text-white'>
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
      <Modal />
    </div>
  )
}

export default Signup
