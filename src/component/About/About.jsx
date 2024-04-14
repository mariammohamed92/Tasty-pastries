import React from 'react'
import style from './About.module.css'
import {Link} from 'react-router-dom'
import imgAbout from '../../img/WhatsApp Image 2024-01-19 at 00.27 1.png'

export default function About() {
  return <>
  {/* Sec3 About  */}
     <div className={`${style.About1} pt-5   `}>
  <div class="container-fuild">
  <div class="row ">
   <div className="col-sm-2"></div>
    <div class="col-sm-6">
      {/*headingAbout  */}
    <h1 className={`${style.headingAbout} text-white  pt-5`} >ABOUT US</h1>
  {/* pragAbout */}
    <p className={`${style.pragAbout} text-white pt-5 pb-3 `}>
    Lorem Ipsum is simply dummy text of the printing and<br/>
     typesetting industry. Lorem Ipsum has been the industry's<br/>
     typesetting industry. Lorem Ipsum has been the industry's<br/>
     typesetting industry. Lorem Ipsum has been the industry's<br/>
     typesetting industry. Lorem Ipsum has been the industry's<br/>
     typesetting industry. Lorem Ipsum has been the industry's<br/>
     typesetting industry. Lorem Ipsum has been the industry's<br/>
     typesetting industry. Lorem Ipsum has been the industry's<br/>
     typesetting industry. Lorem Ipsum has been the industry's<br/>
     typesetting industry. Lorem Ipsum has been the industry's<br/>
      standard dummy text ever since the
    </p>
    {/* buttonAbout */}
    <Link to="../Contact">
<button type="submit" className={`${style.buttonAbout} ms-5 text-center  rounded rounded-5 px-5 py-2 mt-1 mb-4  `}>Contact us</button>
</Link>
    </div>
    <div className="col-sm-1"></div>
    {/* imgAbout */}
<div className=" col-sm-3">
<img src={imgAbout} alt="" className={`${style.imgAbout} ms-5 mt-5` }/>

</div>
</div>
  </div>
 </div>

    </>
}
