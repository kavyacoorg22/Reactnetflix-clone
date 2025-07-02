import {useNavigate,useParams } from "react-router-dom";


const VideoPlayer=()=>{
  const navigate=useNavigate()
  const {trailer_id}=useParams()

  return(
    <div className="bg-black/93">
      <div className="flex  justify-center content-center mt-4">
       <img className="w-7 absolute left-3 cursor-pointer" onClick={()=>navigate('/home')} src="../src/assets/backArrow.svg" alt="img" />
     <iframe className="w-[90%] h-[90%] aspect-video"
    src={`https://www.youtube.com/embed/${trailer_id}?&autoplay=1&mute=1`}
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin"  allowFullScreen></iframe>
      </div>
  
    </div>
  )
}

export default VideoPlayer;