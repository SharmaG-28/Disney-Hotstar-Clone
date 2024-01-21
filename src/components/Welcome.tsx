import React from 'react'
import ViewTrailer from './ViewTrailer'

// import avengers from "../images/avengers.png"

interface movieProp {
    welMovie : any
}

const Welcome = (props : movieProp) => {

    console.log(props)
    return (
        <div style={{backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 7), rgba(0, 0, 0, 0.1)) , url(https://image.tmdb.org/t/p/w500${props.welMovie.backdrop_path})`, backgroundRepeat:"no-repeat", backgroundSize: '100% 100%'}} className='h-screen grid grid-cols-2'>

            <div className='ml-2'>
                <h1 className='text-slate-300 pt-44 font-bold text-4xl'>{props?.welMovie?.title ?? props?.welMovie?.name}</h1>
                <h1 className='text-slate-300 mt-3'>{props?.welMovie?.release_date ?? props?.welMovie?.first_air_date}</h1>
                <h1 className='text-slate-300 mt-4'>{props?.welMovie?.overview}</h1>
                <h1 className=' text-yellow-500 font-bold text-3xl mt-8 '>Language - {props?.welMovie?.original_language}</h1>

                {props?.welMovie && <ViewTrailer welcomeId = {props?.welMovie?.id} />}
            </div>
        </div>
    )
}

export default Welcome