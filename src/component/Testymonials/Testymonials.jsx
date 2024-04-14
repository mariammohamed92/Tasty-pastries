import React from 'react'
import style from './Testymonials.module.css'
import {Link} from 'react-router-dom'

// Sec5 Testymonials
export default function Testymonials() {
  return <>

  <div className={`${style.Testymonials} bg-black `}>
  <div className={style.Testymonials1}>
   <div className="container">
  <div className="row ">
  <div className="col-md-3"></div>
  {/* heading */}
    <div className="col-md-9 mt-5">
    <h1 className={`${style.heading} mb-5`}>TESTY MONIALS</h1>
    </div>
    <div className="col-md-1"></div>
    {/* Card 1 */}
    <div className="col-md-5 mb-5">
    <div className="card rounded rounded-5">
  <div className="card-body">
    <h5 className={`${style.titlecard} card-title pt-3 pb-3 `}>Kathryn Murphy</h5>
    <p className="card-text">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled   
      </p>
      <ul className="fa-ul ">
        <li>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
            
            </li>
          </ul>


  </div>
</div>
    </div>

        {/* Card 2 */}
    <div class="col-md-5  mb-5">
    <div className="card rounded rounded-5">
  <div className="card-body">
    <h5 className={`${style.titlecard} card-title pt-3 pb-3 `}>Kathryn Murphy</h5>
    <p className="card-text">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled   
      </p>
      <ul className="fa-ul ">
        <li>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
            
            </li>
          </ul>


  </div>
</div>
    </div>
    <div className="col-md-1"></div>

    <div class="col-md-1"></div>
        {/* Card 3 */}
    <div className="col-md-5  mb-5">
    <div className="card rounded rounded-5">
  <div className="card-body">
    <h5 className={`${style.titlecard} card-title pt-3 pb-3 `}>Kathryn Murphy</h5>
    <p className="card-text">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled   
      </p>
      <ul className="fa-ul ">
        <li>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
            
            </li>
          </ul>


  </div>
</div>
    </div>
        {/* Card 4 */}
    <div class="col-md-5  mb-5">
    <div className="card rounded rounded-5">
  <div className="card-body">
    <h5 className={`${style.titlecard} card-title pt-3 pb-3 `}>Kathryn Murphy</h5>
    <p className="card-text">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled   
      </p>
      <ul className="fa-ul ">
        <li>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
        <i className={`${style.icon} fa-solid fa-star me-2`}></i>
            
            </li>
          </ul>


  </div>
</div>
    </div>
    <div className="col-md-1"></div>
    <div className="col-md-5  mb-5"></div>
    {/* button */}
    <div className="col-md-4">
      <Link to="../Contact">
<button type="submit" className={`${style.button}  rounded rounded-5 px-5 py-2 mt-3 mb-4   `}>Contact us</button>
</Link>
    </div>

  </div>
  
  
</div>

</div>
  </div>
  </>
}
