import React, { useState } from "react";
import { allSongs } from "../../api/songsApi";
import SongCard from "../components/SongCard";

const HomePage = () => {
  const allSongsData = allSongs();
  console.log("All Songs Data-->" , allSongsData)
  const [visibleCount, setVisibleCount] = useState(20);

  const loadMore = () => {
    setVisibleCount(prev => prev + 20);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {allSongsData.slice(0, visibleCount).map((song , index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>

      {visibleCount < allSongsData.length && (
        <button
          onClick={loadMore}
          className="mt-6 px-6 py-2 bg-green-500 text-white rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default HomePage;