import React from 'react'
import style from './Contact.module.css'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// Sec6 Contact
export default function Contact() {
// function Api
 async function content(values) {
  console.log("Hello From Sumbit",values)
let {data}=  await axios.post(`http://upskilling-egypt.com:3001/contact`,values)
console.log(data);
}

// validation
let validationSchema=Yup.object({
  name:Yup.string().max(15,"name should be less that 15").required("name is Required"),
  email:Yup.string().email('Invalid email address').required('email is Required'),
  phone:Yup.string().matches(/^01[0125][0-9]{8}$/,"Phone is invaild").required('Phone is Required'),

})

// formik
  let formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      phone:""
  },
  validationSchema: validationSchema,
  onSubmit:(values)=>content(values)
  
    
  })


  return <>
    <div className="container">
      <div className="row">
        {/* Content Heading */}
        <div className="col-md-3">
        </div>
        <div className="col-md-8">
          <h1 className={style.content}>CONTACT US</h1>
        </div>
        <div className="col-md-1">
        </div>
                    {/* Content Form */}
        <div className="col-md-2">
        </div>
        <div className="col-md-4">
        <form onSubmit={formik.handleSubmit}>
                      {/*Full Name  */}
        <div className="form-group mb-2">
  <input type="text" id='name' 
   className={`${style.input} form-control rounded rounded-5 mb-3 mt-5`}
  name='name' 
  placeholder='Full Name'
  value={formik.values.name} 
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  {formik.errors.name&&formik.touched.name?<div className=' alert alert-danger'>{formik.errors.name}</div>:""}
                      </div>
            {/* Email */}
<div className="form-group mb-2">
  <input type="email" id='email' 
  className={`${style.input} form-control rounded rounded-5 mb-3`}
  name='email' 
  placeholder='Email'
  value={formik.values.email} 
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
    {formik.errors.email&&formik.touched.email?<div className=' alert alert-danger'>{formik.errors.email}</div>:""}

                  </div>
            {/* Phone Number */}
<div className="form-group mb-2">
  <input type="tel" id='phone' 
  className={`${style.input} form-control rounded rounded-5 mb-3`}
  name='phone' 
  placeholder='Phone Number'
  value={formik.values.phone} 
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
    {formik.errors.phone&&formik.touched.phone?<div className=' alert alert-danger'>{formik.errors.phone}</div>:""}

                  </div>
                    {/* Button */}
<button type="submit" className={`${style.button}  rounded rounded-5 px-5 py-2  `}>SEND</button>

</form>
  </div>
        <div className="col-md-4 mt-5">
          <ul className="fa-ul mt-5">
            <li><i className={`${style.icon} fa-solid fa-envelope px-2 mb-4`}></i>upskilling.eg1@gmail.com</li>
            <li><i className={`${style.icon} fa-solid fa-phone-volume px-2`}></i>+20 115 493 2137</li>
          </ul>

        </div>
      </div>
    </div>
  </>
}


