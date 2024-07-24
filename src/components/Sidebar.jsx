import React from "react";
import likedSongImg from "../assets/likedSongs.png";

const Sidebar = () => {
  return (
    // this is starting of main div
    <div className="bg-black h-screen p-1.5 flex flex-col gap-1.5">
      {/* sidebar top */}
      <div className="bg-cardBackground h-fit w-fit p-6 cursor-pointer flex flex-col gap-7 rounded">
        <div className="relative group flex items-center">
          <svg
            className="w-7 h-7 text-white hover:text-green-500"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"
            />
          </svg>
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-gray ml-2 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Home
          </div>
        </div>
        <div className="relative group flex items-center">
          <svg
            className="fill-current text-gray w-7 h-7 hover:text-white transition-all duration-300 ease-in-out "
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
          </svg>
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-gray text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 ml-2 transition-opacity duration-300">
            search
          </div>
        </div>
      </div>
      {/* start of sidebar bottom */}
      <div className="bg-cardBackground h-fit w-fit p-4 cursor-pointer flex flex-col gap-7 rounded justify-between items-center">
        <svg
          className="fill-current text-gray hover:text-white h-6 w-6"
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
        </svg>

        <img
          src={likedSongImg}
          alt="Liked Songs"
          className="w-11 h-11 rounded"
        />
      </div>
    </div>
  );
};

export default Sidebar;
