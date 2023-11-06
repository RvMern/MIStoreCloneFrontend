import React, { useEffect, useState } from 'react';
import "../Styles/NavOptions.css";
import NavOptionsCard from './NavOptionsCard';

const NavOptions = ({miPhones,redmiPhones,tv,laptop,FilterandLifestyle,home,audio,accessories}) => {
   const [miPhonesToggle, setMiPhonesToggle] = useState(false);
   const [redmiPhonesToggle, setRedmiPhonesToggle] = useState(false);
   const [tvToggle, setTvToggle] = useState(false);
   const [laptopsToggle, setLaptopsToggle] = useState(false);
   const [filterToggle, setFilterToggle] = useState(false);
   const [homeToggle, setHomeToggle] = useState(false);
   const [audioToggle, setAudioToggle] = useState(false);
   const [accessoriesToggle, setAccessoriesToggle] = useState(false);

   useEffect(()=>{

      if(window.location.pathname === "/miPhones"){
        return setMiPhonesToggle(true);
      }
      if(window.location.pathname === "/redmiPhones"){
         return setRedmiPhonesToggle(true);
      }
      if(window.location.pathname === "/tv"){
         return setTvToggle(true);
      }
      if(window.location.pathname === "/laptops"){
         return setLaptopsToggle(true);
      }
      if(window.location.pathname === "/filters&lifestyle"){
         return setFilterToggle(true);
      }
      if(window.location.pathname === "/homeproduct"){
         return setHomeToggle(true);
      }
      if(window.location.pathname === "/audio"){
         return setAudioToggle(true);
      }
      if(window.location.pathname === "/accessories"){
         return setAccessoriesToggle(true);
      }
   })

  return (
    <>
        <div className='nav-options'>
            {
               miPhonesToggle === true && miPhones?.map((item,index)=>{
                return <NavOptionsCard key={index} name={item.name} image={item.image} price={item.price} index={index} />
               })
            }

            {
               redmiPhonesToggle === true && redmiPhones?.map((item,index)=>{
                return <NavOptionsCard key={index} name={item.name} image={item.image} price={item.price} index={index} />
               })
            }

            {
               tvToggle === true && tv?.map((item,index)=>{
                return <NavOptionsCard key={index} name={item.name} image={item.image} price={item.price} index={index} />
               })
            }

            {
               laptopsToggle === true && laptop?.map((item,index)=>{
                return <NavOptionsCard key={index} name={item.name} image={item.image} price={item.price} index={index} />
               })
            }

            {
               filterToggle === true && FilterandLifestyle?.map((item,index)=>{
                return <NavOptionsCard key={index} name={item.name} image={item.image} price={item.price} index={index} />
               })
            }

            {
               homeToggle === true && home?.map((item,index)=>{
                return <NavOptionsCard key={index} name={item.name} image={item.image} price={item.price} index={index} />
               })
            }

            {
               audioToggle === true && audio?.map((item,index)=>{
                return <NavOptionsCard key={index} name={item.name} image={item.image} price={item.price} index={index} />
               })
            }

            {
              accessoriesToggle === true && accessories?.map((item,index)=>{
                return <NavOptionsCard key={index} name={item.name} image={item.image} price={item.price} index={index} />
               })
            }
        </div>
    </>
  )
}

export default NavOptions