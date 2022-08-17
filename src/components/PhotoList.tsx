import useCurated from "../hooks/useCurated";
import { PexelsPhoto } from "../services/pexels";
import PhotoThumb from "./PhotoThumb";

const PhotoList = () => {
  const { photos, loading, error } = useCurated(1, 10);

  return (
    <div className="container mx-auto mt-2">
      <div className="columns-3">
        {photos.map((photo: PexelsPhoto) => (
          <PhotoThumb data={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
