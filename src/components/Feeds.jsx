import { posts } from "../db/db";
import heart from "../assets/heart.png";
import comment from "../assets/comment.png";
import share from "../assets/share.png";
import archive from "../assets/archive.png";
import { MusicNote } from "../assets/Icons";
import { useState } from "react";

export default function Feeds() {
   const [aspectRatios, setAspectRatios] = useState({});

   function handleImageLoad(id, e) {
      const { naturalWidth, naturalHeight } = e.target;
      const ratio = naturalWidth / naturalHeight;
      setAspectRatios((prev) => ({ ...prev, [id]: ratio }));
   }

   return (
      <>
         <div className="mb-20">
            {posts.map((post) => {
               const ratio = aspectRatios[post.id];
               const isSquareOrLandscape = ratio >= 1;

               return (
                  <div className="mb-5">
                     {/* ProfilePic & Username above if square/landscape */}
                     {isSquareOrLandscape && (
                        <div className="flex items-center mb-1.5 gap-1.5 mx-2">
                           <img src={post.userSnapshot.profilePic} alt={`${post.userSnapshot.username} pp`} className="w-9 h-9 rounded-full" />
                           <div className="">
                              <p className="font-semibold text-sm">{post.userSnapshot.username}</p>
                              <p className="text-xs">
                                 <MusicNote />
                                 {post.song}
                              </p>
                           </div>
                        </div>
                     )}
                     <div className="flex relative">
                        <img onLoad={(e) => handleImageLoad(post.id, e)} src={post.media[0].url} alt={`${post.userSnapshot.username} post`} />
                        {ratio < 1 && (
                           <div className="absolute flex items-center mb-1.5 gap-1.5 mx-2 mt-2">
                              <img src={post.userSnapshot.profilePic} alt={`${post.userSnapshot.username} pp`} className="w-9 h-9 rounded-full" />
                              <div className="">
                                 <p className="font-semibold text-sm text-white text-shadow-xs">{post.userSnapshot.username}</p>
                                 <p className="text-xs text-white text-shadow-xs">
                                    {post.song && <MusicNote />}
                                    {post.song}
                                 </p>
                              </div>
                           </div>
                        )}
                     </div>
                     <div className="flex justify-between mx-3 mt-2 items-center">
                        <div className="flex gap-4">
                           <div className="flex gap-2">
                              <img src={heart} alt="heart-icon" className="w-6 h-6" />
                              <p>{post.likeCount}</p>
                           </div>
                           <div className="flex gap-2">
                              <img src={comment} alt="comment-icon" className="w-6 h-6" />
                              <p>{post.commentCount}</p>
                           </div>
                           <div className="flex gap-2">
                              <img src={share} alt="share-icon" className="w-6 h-6 mt-0.5" />
                              <p>{post.shareCount}</p>
                           </div>
                        </div>
                        <div>
                           <img src={archive} alt="archive-icon" className="w-6 h-6" />
                        </div>
                     </div>
                     <div className="flex flex-col mx-2 mt-1">
                        <p>
                           <span className="font-semibold me-1.5">{post.userSnapshot.username}</span>
                           {post.caption}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                           {post.time} • <span className="text-black font-semibold">See Translation</span>
                        </p>
                     </div>
                  </div>
               );
            })}
         </div>
      </>
   );
}
