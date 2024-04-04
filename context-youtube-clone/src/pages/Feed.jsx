import { useContext } from "react";
import SideBar from "../components/SideBar";
import VideoCard from "../components/VideoCard";
import { VideoContext } from "../context/videoContext";

const Feed = () => {
  const { videos, isLoading, error } = useContext(VideoContext);

  return (
    <div className="flex">
      <SideBar />
      <div className="videos">
        {isLoading ? (
          <p>Yükleniyor</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard key={item.videoId} video={item} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;