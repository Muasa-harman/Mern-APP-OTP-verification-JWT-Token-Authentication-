import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Profile from '../assets/Profile1.jpg';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';
const Register = () => {
    const [file,setFile] = useState()
    const formik = useFormik({
        initialValues:{
            email:'harman.muasa@gmail.com',
            username:'harman',
            password:'1234@5'
        },
        validate:registerValidation,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async values =>{
            values = await Object.assign(values,{profile:file || ''})
            console.log(values)
        }
    })
    // formik doesnt support file upload so we need to create this handler
    const onUpload = async e =>{
        const base64 =await convertToBase64(e.target.files[0]);
        setFile(base64);
    }
  return (
    <div className='container mx-auto'>
        <Toaster position='top-center' reverseOrder={false}></Toaster>
        <div className='flex justify-center items-center h-screen'>
            <div className={styles.glass} style={{width:"45%"}}>
            <div className='title flex flex-col items-center'>
                <h5 className='text-5xl font-bold'>Register</h5>
                <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                    Happy to join you!
                </span>
            </div>
            <form className='py-1' onSubmit={formik.handleSubmit}>
                <div className='profile flex justify-center py-4'>
                    <label htmlFor='profile'>
                    <img className={styles.profile_img} src={file || Profile} alt='avatar'/>
                    </label>
                    <input onChange={onUpload} type='file' id='profile' name='profile'/>
                </div>
                <div className='textbox flex flex-col items-center gap-6'>
                    <input {...formik.getFieldProps("email")} className={styles.textbox} type="text" placeholder='Email'/>
                    <input {...formik.getFieldProps("username")} className={styles.textbox} type="text" placeholder='Username*'/>
                    <input {...formik.getFieldProps("password")} className={styles.textbox} type="text" placeholder='Password*'/>
                    <button className={styles.btn} type='submit'>Register</button>
                </div>
                <div className='text-center py-4'>
                    <span className='text-gray-500'>Already Registered? <Link to='/' className='text-red-500'>Login Now</Link></span>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Register