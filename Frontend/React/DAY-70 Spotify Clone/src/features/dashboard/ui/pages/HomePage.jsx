
import SongCard from "../components/SongCard";
import { useDashboard } from "../../hooks/useDashboard";
import { useSelector } from "react-redux";

const HomePage = () => {
  

  let {dispatch , loadMore ,  visibleCount} = useDashboard()
  let {songs} = useSelector((store)=>store.player)

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {songs.slice(0, visibleCount).map((song , index) => (
          <SongCard key={index} song={song} dispatch={dispatch} />
        ))}
      </div>

      {visibleCount < songs.length && (
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