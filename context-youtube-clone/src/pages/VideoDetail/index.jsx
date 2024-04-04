import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useSearchParams } from "react-router-dom";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComment] = useState(null);
  //* 1. arama parametrelerine erişim için kullandık
  const [searchParams] = useSearchParams();
  //* 2. urlden "v" isimli parametreye searchParams içindeki get metodu ile değerine eriştik.
  const id = searchParams.get("v");
  console.log(id);
  //* 3. id'si bilinen videonun bilgilerini apiden al
  useEffect(() => {
    api.get(`/video/info?id=${id}`).then((res) => setVideo(res.data));

    api.get(`/comments?id=${id}`).then((res) => setComment(res.data));
  }, [id]);
  return <div>videodetail</div>;
};

export default VideoDetail;
