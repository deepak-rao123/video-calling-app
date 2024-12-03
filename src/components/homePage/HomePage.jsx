import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();
    const handleRoomIdGenerate = () => {
      const randomId = Math.random().toString(36).substring(2, 9);
      const timestamp = Date.now().toString().substring(-4);
      setRoomId(randomId + timestamp);
    };
  
    const handleOneAndOneCall = () => {
      if (!roomId) {
        alert("Please Generate Room Id First");
        return;
      }
      navigate(`room/${roomId}?type=one-on-one`);
    };
    const handleGroupCall = () => {
      if (!roomId) {
        alert("Please Generate Room Id First");
        return;
      }
      navigate(`room/${roomId}?type=group-call`);
    };
    
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#f0f8ff] ">
      <div className="text-center">
        <h1 className="text-[36px] mb-3 text-[#333]">Welcome to Video Calling App</h1>
        <p className="text-[16px] mb-5 text-[#555] ">
          Start a video call with a randomly generated Room ID
        </p>
        <div className="flex  justify-center items-center mb-5">
          <input
            type="text"
            className="p-3 mr-1 border-[1px] border-[#ccc] rounded-md w-56 text-[16px] text-center"
            placeholder="Generated Room ID"
            value={roomId} 
            readOnly
          />
          <button className="px-3 py-5 bg-[#007BFF] text-white text-[16px] rounded-md cursor-pointer border-none transition-bg 0.3s ease hover:bg-[#0056b3]"
           onClick={handleRoomIdGenerate}
        >
            Generate
          </button>
        </div>
        <div className="flex justify-center mt-20px">
          <button
            className="px-4 py-8 my-3 bg-[#007bff] text-white border-none rounded-md cursor-pointer transition-bg-0.3 ease hover:bg-[#0056b3] disabled:bg-[#ccc]
            disabled:cursor-not-allowed"
           onClick={handleOneAndOneCall}
            disabled={!roomId} 
          >
            One-on-One Call
          </button>
          <button
            className="px-4 py-8 my-3 mx-2 bg-[#007bff] text-white border-none rounded-md cursor-pointer transition-bg-0.3 ease hover:bg-[#0056b3] disabled:bg-[#ccc]
            disabled:cursor-not-allowed"
            onClick={handleGroupCall}
            disabled={!roomId}
          >
            Group Call
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage