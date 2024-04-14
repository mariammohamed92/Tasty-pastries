import React from 'react'
import style from './Tasty.module.css'
import {Link} from 'react-router-dom'
import imgTesty from '../../img/Place Your Image Here (Double Click to Edit)_ 1.png'

export default function Tasty() {
  return <>
  {/* Sec1 Tasty */}
     <div  className={`${style.testy} `}>
     <div className={`${style.testy1}   `}>
  <div class="container-fuild">
  <div class="row ">
   <div className="col-sm-2"></div>
    <div class="col-sm-6">
{/* headingTesty */}
    <h1 className={`${style.headingTesty} text-white  pt-5`} >Tasty pastries</h1>
   {/* pragTesty */}
    <p className={`${style.pragTesty} text-white pt-5 pb-3 `}>
    Lorem Ipsum is simply dummy text of the printing and<br/>
     typesetting industry. Lorem Ipsum has been the industry's<br/>
      standard dummy text ever since the
    </p>
    {/* buttonTesty */}
    <Link to="../Contact">
<button type="submit" className={`${style.buttonTesty} ms-5 text-center  rounded rounded-5 px-5 py-2 mt-1 mb-4  `}>SEE MORE</button>
</Link>
    </div>
    <div className="col-sm-1"></div>
    {/* imgTesty */}
<div className=" col-sm-3">
<img src={imgTesty} alt="" className={`${style.imgTesty} ms-5 mt-5` }/>
</div>
</div>
  </div>
 </div>
 </div>

 {/* Sec ii */}
 <div  className={`${style.testy}  `}>
  <div class="container">
  <div class="row ">
  <div className="col-sm-1"></div>
  {/* social media */}
  <div  className= "col-sm-1">
    <h6>
      <Link to="https://www.facebook.com" target='_blank'>
    <i   className={`${style.soil} fab mx-1 fa-facebook`}></i>
    </Link>
    </h6>
    <h6>
    <Link to="https://www.instagram.com" target='_blank'>
    <i  className={`${style.soil} fab mx-1 fa-instagram`}></i>
    </Link>
    </h6>
    <h6>
    <Link to="https://twitter.com"  target='_blank'>
    <i  className={`${style.soil} fab mx-1 fa-twitter`}></i>
    </Link>
    </h6>
    </div>
    {/* Telephone */}
   <div className={`${style.testy22} pt-5 `}>
    <div class="col-sm-6">
      <h1 className={style.heading2Testy}>Telephone:+7 700 000 00 00</h1>
    </div>
    </div>
   
</div>
  </div>
 
 </div>
  </>
}
