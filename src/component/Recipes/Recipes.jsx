import React , { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import style from './Recipes.module.css'
import axios from 'axios';

// Sec4 Recipes
export default function Recipes() {
  const [recipes, setRecipes] = useState([])

  // function Api
  async function getData(){
      let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
      console.log(data);
      setRecipes(data.meals)
    } 
  
// Display the data as soon as we enter the page
  useEffect(() => {
    getData()
  }, [])
  

  return <>

   <div className="container">
  <div className="row ">
  <div className="col-md-4">
    </div>
    <div className="col-md-8 mt-5">
      {/* heading */}
    <h1 className={`${style.heading} mb-5`}>RECIPES</h1>
    </div>
    {/* Show 6 photos */}
    {recipes.slice(0,6).map((item ,index )=> 
  <div className="col-md-4 mb-5" key={index}>
  <div className= {`${style.card} card rounded rounded-5`}>
  {/* img Api */}
  <img src={`${item.strMealThumb}`} alt=""  className='w-100 rounded rounded-5' />
  {/* title Api */}
  <h5 className={`${style.titlecard} card-title pt-3 pb-3 mt-3 ms-4 `}>{item.strMeal}</h5>
{/* prag lorem */}
<p className='ms-3 text-muted'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
</p>
  </div>
   </div> 
  )} 

    
   
    <div className="col-md-5">
    </div>
    {/* button */}
    <div className="col-md-4">
      <Link to="../Contact">
<button type="submit" className={`${style.button}  rounded rounded-5 px-5 py-2 mt-3 mb-4   `}>Contact us</button>
</Link>
    </div>

  </div>
  
  
</div>

   </>
}
