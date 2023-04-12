import React from 'react';

function Busqueda(props) {

    const handleChange = (e) => {
        props.setSearchQuery(e.target.value);
    }

    return (

        
            <div className="mb-3 xl:w-96">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className='relative m-0 mr-0.5 block w-[30%] sm:w-[full] min-w-0 flex-auto rounded-l border border-solid border-[#7DF9FF] bg-transparent bg-clip-padding px-3 py-[0.25rem] text-[#FFFFFF] text-xl font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out'
                  placeholder="Search"
                  value={props.searchQuery}
                  onChange={handleChange}
                />
          
                <button className="relative z-[2] flex items-center rounded-r bg-[#7DF9FF] px-6 py-2.5 font-bold uppercase leading-tight text-white shadow-md 
                transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg "
                  type="button">
                  <svg viewBox="0 0 20 20" className="h-5 w-5">
                    <path fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" />
                  </svg>
                </button>
              </div>
            </div>
          
          


        // <div className="mb-3 xl:w-96">
        //     <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        //         <input
        //             type="search"
        //             className='relative m-0 mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-[#7DF9FF] bg-transparent bg-clip-padding px-3 py-[0.25rem] text-[#FFFFFF] text-xl font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out'
        //             placeholder="Search"
        //             value={props.searchQuery}
        //             onChange={handleChange}
        //         />

        //         <button className="relative z-[2] flex items-center rounded-r bg-[#7DF9FF] px-6 py-2.5 font-bold uppercase leading-tight text-white shadow-md 
        //         transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg "
        //             type="button">
        //             <svg viewBox="0 0 20 20" className="h-5 w-5">
        //                 <path fill-rule="evenodd"
        //                     d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" />
        //             </svg>
        //         </button>
        //     </div>
        // </div>

    )
}

export default Busqueda