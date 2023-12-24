/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Modal from './Modal'

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
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
              value='Login'
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
