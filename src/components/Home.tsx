import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface movieProp {
    movies : any
    search : boolean
    searchRef : any
}

const Home = (props : movieProp) => {

    const [searchKeys, setsearchKeys] = useState("")


    return (
        <>
            {props.search && 
                <input ref={props.searchRef} onChange={(e) => setsearchKeys(e.target.value)} type="text" className=" mt-5 bg-gray-800 border border-gray-800 text-white text-sm rounded-lg focus:ring-gray-800 focus:border-gray-500 block w-10/12 p-2.5 outline-none" placeholder="Movies, Shows and more" required
            />}
            <h1 className='bg-black  text-slate-100 pt-7 font-bold text-3xl ml-2'>Latest Releases</h1>
            <div className='bg-black grid grid-cols-6 pt-5 '>
                {props?.movies && props?.movies?.filter((data: any) => {
                    const title = data.title ? data.title.toLowerCase() : data.name.toLowerCase();
                    return title.includes(searchKeys.trim().toLowerCase());
                    }).map((data : any) => {
                    return(
                        <Link to="/details" state={{data:data}}><div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2">
                            <img className="w-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title || data.name} />
                        </div>
                        </Link>
                    )
                })}
                
            </div>
        </>
    )
}

export default Home
