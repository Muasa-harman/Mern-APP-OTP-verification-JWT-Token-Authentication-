import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../assets/Profile1.jpg'
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
// import { passwordValidate } from '../helper/validate';

const Recovery = () => {
    
  return (
    <div className='container mx-auto'>
        <Toaster position='top-center' reverseOrder={false}></Toaster>
        <div className='flex justify-center items-center h-screen'>
            <div className={styles.glass}>
            <div className='title flex flex-col items-center'>
                <h5 className='text-5xl font-bold'>Recovery</h5>
                <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                    Enter OTP to recover password
                </span>
            </div>
            <form className='pt-20'>
                <div className='textbox flex flex-col items-center gap-6'>
                  <div className='input text-center'>
                    
                  <span className='py-4 text-sm text-left text-gray-500'>
                    Enter 6 digit OTP sent to your email address
                  </span>
                    <input className={styles.textbox} type="text" placeholder='OTP'/>
                  </div>
                    <button className={styles.btn} type='submit'>Sign-In</button>
                </div>
                <div className='text-center py-4'>
                    <span className='text-gray-500'>Cant get OTP? <button className='text-red-500'>Resend</button></span>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Recovery