import { useEffect, useState } from "react";
import { loggedIn, users } from "../db/db";
import instagram from "../assets/instagram.png";
import heart from "../assets/heart.png";
import messenger from "../assets/messenger.png";

export default function StorySlider() {
   const [storyList, setStoryList] = useState([]);

   useEffect(() => {
      function sortList() {
         const userArr = users.filter((user) => user.username !== loggedIn);
         const loggedInUser = users.find((user) => user.username === loggedIn);

         if (loggedInUser) {
            userArr.unshift({
               ...loggedInUser,
               username: "Your Story",
            });
         }

         setStoryList(userArr);
      }

      sortList();
   }, []);

   return (
      <>
         <div className="flex justify-between items-center my-4 mx-3">
            <img src={instagram} alt="instagram text" className="w-[120px]" />
            <div className="flex gap-8 mx-2">
               <img src={heart} alt="heart-icon" className="w-7 h-7" />
               <div className="relative">
                  <img src={messenger} alt="messenger-icon" className="w-7 h-7" />
                  <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-[19px] h-[19px] text-center text-white font-semibold text-[12px]">
                     {storyList[0].unreadMessages}
                  </div>
               </div>
            </div>
         </div>
         <div className="flex overflow-x-auto items-center hide-scrollbar mb-3">
            {storyList?.map((user) => (
               <div className="relative flex flex-col items-center gap-2 flex-none mx-3">
                  <div className="story"></div>
                  <img src={user.profilePic} alt={`${user.username} pic`} className="rounded-full w-[88px] border-[2.5px] border-white" />
                  <p className="text-xs">{user.username}</p>
               </div>
            ))}
         </div>
      </>
   );
}
