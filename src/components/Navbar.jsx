import home from "../assets/home.png";
import search from "../assets/search.png";
import add from "../assets/add.png";
import reels from "../assets/reels.png";
import { loggedIn, users } from "../db/db";
import { useEffect, useState } from "react";

export default function Navbar() {
   const [loggedInUser, setLoggedInUser] = useState("");

   useEffect(() => {
      const user = users.find((user) => user.username === loggedIn);
      setLoggedInUser(user);
   }, []);

   return (
      <>
         <div className="flex bg-white w-full justify-between pt-4 pb-1.5 px-5 fixed bottom-0 border-t-1 border-gray-100">
            <img src={home} alt="home-icon" className="w-7 h-7" />
            <img src={search} alt="search-icon" className="w-7 h-7" />
            <img src={add} alt="add-icon" className="w-7 h-7" />
            <img src={reels} alt="reels-icon" className="w-7 h-7" />
            <div className="flex flex-col items-center gap-1">
               <img src={loggedInUser.profilePic} alt="user-pp" className="w-7 h-7 rounded-full" />
               <div className="bg-red-600 rounded-full w-1 h-1"></div>
            </div>
         </div>
      </>
   );
}
