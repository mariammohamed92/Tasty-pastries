import React from 'react'
import style from './Work.module.css'
import {Link} from 'react-router-dom'
import img1 from '../../img/WhatsApp Image 2024-01-19 at 00.27.png'
import img2 from '../../img/WhatsApp Image 2024-01-19 at 00.27 (1).png'
import img3 from '../../img/WhatsApp Image 2024-01-19 at 00.27 (2).png'

export default function Work() {
  return <>
  {/* Sec2 Work */}
       <div  className={`${style.testy}  `}>
     <div className={`${style.testy1} pt-5   `}>
  <div class="container">
  <div class="row ">
   <div className="col-sm-2"></div>
    <div class="col-sm-6">
      {/*headingWork  */}
    <h1 className={`${style.headingWork} text-white  pt-5`} >How we work</h1>
    </div>
</div>
  </div>
  {/* prag1 */}
  <div className={`${style.prag1} `}>
   <p>Lorem Ipsum is simply<br/>
    dummy text of the printing<br/>
     and typesetting industry.<br/>
      Lorem Ipsum has been the<br/>
       industry's standard dummy<br/>
        text ever since the</p>
   </div>
   {/* imgCol */}
   <div className="container ">
  <div className="row ">
    
    <div className="col-md-3 mb-5">
    <div className="card">
  <img src={img1} alt="" className="card-img-top" />
</div>
    </div>
    <div className="col-md-3 mb-5">
    <div className="card">
  <img src={img2} alt="" className="card-img-top" />
</div>
    </div>
    <div className="col-md-3 mb-5">
    <div className="card">
  <img src={img3} alt="" className="card-img-top" />
</div>

   </div>
    <div className="col-md-3 mb-5">
    <div className="card">
  <img src={img1} alt="" className="card-img-top" />
</div>
    </div>
    <div className="col-md-6">
    </div>
    {/* buttonTesty */}
    <div className="col-md-3">
    <Link to="../Contact">
<button type="submit" className={`${style.buttonTesty} ms-5 text-center  rounded rounded-5 px-5 py-2  mb-4  `}>Contact Us</button>
</Link>

    </div>

  </div>
  
 
</div>
 </div>
 </div>

  </>
}
