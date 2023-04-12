import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Busqueda from './Busqueda';
import PersonajeInfo from './PersonajeInfo';

function ListaPersonajes() {

    const [characters, setCharacters] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [characterId, setCharacterId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Llamada al API para hallar los personajes al cargar la pagina
    useEffect(() => {
        const getCharacters = async () => {
            try {
                let response = await axios.get('https://rickandmortyapi.com/api/character');
                setCharacters(response.data.results);

            } catch (error) {
                console.log(error);
            }
        };
        getCharacters();
    }, []);

    const handleClick = (id) => {
        setCharacterId(id);
        setOpenModal(true);
    }

    // Funcion para filtrar personaje buscado
    const searchCharacter = characters.filter(character => 
        character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='flex flex-col gap-5 items-center'>
            <Busqueda searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <div className='m-auto w-full sm:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[7rrem] sm:gap-[7rem]'>
                {searchCharacter.map((character) => (
                    <div key={character.id} className='relative inline-block bg-transparent border-2 border-[#9FC131] h-[22rem] w-full rounded-[22px] p-1.5
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                        <img src={character.image} alt='character-img' className='h-[21rem] rounded-[22px] align-center' />
                        <div className='text-block flex flex-row justify-between opacity-60 hover:opacity-90'>
                            <h2 className='text-xl font-bold hover:cursor-pointer hover:text-[#F73C86]'>{character.name}</h2>
                            <button className='text-3xl font-bold hover:cursor-pointer hover:text-[#DBF227]' onClick={() => handleClick(character.id)}>+</button>
                        </div>
                    </div>
                ))}
                {openModal && <PersonajeInfo characterId={characterId} open={openModal} onClose={() => setOpenModal(false)} />}
            </div>
        </div>

    )
}

export default ListaPersonajes;