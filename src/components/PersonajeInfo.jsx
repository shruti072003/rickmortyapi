import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img from '../assets/img.png';

function PersonajeInfo(props) {
  const [charInfo, setcharInfo] = useState([]);

  // Llamada al API para obtener la info del personaje seleccionado
  useEffect(() => {
    const getInfo = async () => {
      try {
        let response = await axios.get('https://rickandmortyapi.com/api/character/' + props.characterId);
        setcharInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (props.characterId) {
      getInfo();
    }
  }, [props.characterId]);

  return (
    <div className='overlay'>
      <div className='modal h-[32rem] w-[75%] md:h-[25rem] md:w-[48rem] flex flex-col md:flex-row md:gap-10 rounded-[22px]'>
        <img src={img} alt='logo' className='absolute h-[7rem] w-[7rem] sm:h-[12rem] sm:w-[12rem] bottom-[-1.5rem] sm:bottom-[-2.2rem] right-[-3rem] sm:right-[-4rem] opacity-1' />   
        {!props.open ? 'Loading' :
          <>
            <img src={charInfo.image} alt='character-img' className='rounded-[18px] sm:rounded-l-[18px] w-[100%] sm:w-[45%]' />
            <div className='pt-2 pl-2 sm:pt-7 text-white relative flex-1'>
              <h1 className='pb-1.5 sm:pt-5 sm:pb-7 font-bold text-xl sm:text-4xl text-[#DBF227]'>{charInfo.name}</h1>
              <div className='font-semibold text-md sm:text-xl flex flex-col gap-2 sm:gap-6 w-[80%]'>
                <p>Gender: {charInfo.gender}</p>
                <p>Status: {charInfo.status}</p>
                <p>Species: {charInfo.species}</p>
                <p>Location: {charInfo.location && charInfo.location.name}</p>
              </div>
              <button className='text-4xl font-red font-bold absolute top-[-17rem] md:top-3 right-3 sm:right-6 text-[#F73C86] hover:cursor-pointer
              transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'
                onClick={props.onClose}>x</button>
            </div>
          </>
        }
      </div>
    </div>



  )
}



export default PersonajeInfo

