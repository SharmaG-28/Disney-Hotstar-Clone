import React from 'react'
import { useLocation } from 'react-router-dom'
import ViewTrailer from './ViewTrailer'

const MovieDetails = () => {

    const location = useLocation()

    console.log(location)

    return (
        <div style={{backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 7), rgba(0, 0, 0, 0.1)) , url(https://image.tmdb.org/t/p/w500${location?.state?.data?.backdrop_path})`, backgroundRepeat:"no-repeat", backgroundSize: '100% 100%'}} className='h-screen grid grid-cols-2'>

            <div>
                <h1 className='text-slate-300 pt-44 pl-10 font-bold text-4xl'>{location?.state?.data?.title ?? location?.state?.data?.name}</h1>
                <h1 className='text-slate-300 mt-3 pl-10'>{location?.state?.data?.release_date ?? location?.state?.data?.first_air_date}</h1>
                <h1 className='text-slate-300 mt-4 pl-10'>{location?.state?.data?.overview}</h1>
                <h1 className=' text-yellow-500 font-bold text-3xl mt-8 pl-10'>Language - {location?.state?.data?.original_language}</h1>
                {/* <button className='bg-gray-600 mt-10 ml-10 w-80 h-12 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>
                    Watch Now
                </button> */}
                <div className='pl-10'>
                    <ViewTrailer detailsId={location?.state?.data?.id}/>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails