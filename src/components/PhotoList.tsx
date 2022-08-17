import useCurated from "../hooks/useCurated";
import { PexelsPhoto } from "../services/pexels";
import PhotoThumb from "./PhotoThumb";

const PhotoList = () => {
  const { photos, loading, error, setPage, setPerPage, currentPage } =
    useCurated(1, 10);

  return (
    <div className="container mx-auto mt-3">
      {loading && (
        <div className="text-center text-2xl font-bold text-blue-600 mt-5 mb-3 animate-pulse">
          Loading...
        </div>
      )}

      {!loading && !error && photos.length > 0 && (
        <div className="columns-3">
          {photos.map((photo: PexelsPhoto) => (
            <PhotoThumb data={photo} />
          ))}
        </div>
      )}

      <button
        onClick={() => {
          setPage(currentPage + 1);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Button
      </button>
    </div>
  );
};

export default PhotoList;
