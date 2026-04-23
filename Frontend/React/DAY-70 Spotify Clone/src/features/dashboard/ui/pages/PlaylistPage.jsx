import React from "react";
import { useParams } from "react-router";

const PlaylistPage = () => {
  const { id } = useParams();

  return (
    <div className="text-white text-2xl">
      Playlist ID: {id}
    </div>
  );
};

export default PlaylistPage;