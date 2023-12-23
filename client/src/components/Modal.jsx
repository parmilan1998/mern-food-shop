/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <dialog id='my_modal_5' className='modal modal-middle sm:modal-middle'>
        <div className='modal-box'>
          <div className='modal-action mt-0 font-poppins'>
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
            </form>
          </div>
          <div className='flex flex-row justify-center gap-4 mb-3'>
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
      </dialog>
    </div>
  )
}

export default Modal
