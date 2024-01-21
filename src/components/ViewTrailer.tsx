import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../firebase/setup';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface idProp {
  detailsId?: any;
  welcomeId?: any;
}

const ViewTrailer = (props: idProp) => {

  const [videos, setVideos] = useState<any>([]);

  const getVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${props?.detailsId ?? props?.welcomeId}/videos?api_key=bafe69fa3ff39dad7fd7e158dca6b32f&language=en-US`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setVideos(json.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getVideos();
  }, [props?.detailsId ?? props?.welcomeId]);

  console.log(videos)

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    if(auth.currentUser?.phoneNumber){
        setIsOpen(true);
    }else{
        setIsOpen(false);
        toast.warning('Please Login')
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
        <button onClick={openModal} className='bg-zinc-600 mt-10 w-80 h-12 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>
            Watch Now
        </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        {videos.length > 0 ? (
          <YouTube videoId={videos[0].key} />
        ) : (
          <p>No videos available</p>
        )}
      </Modal>
      <ToastContainer/>
    </div>
  );
};

export default ViewTrailer;
