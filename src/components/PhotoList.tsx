import useCurated from "../hooks/useCurated";
import { PexelsPhoto } from "../services/pexels";
import Pagination from "./Pagination";
import PhotoThumb from "./PhotoThumb";

const PhotoList = () => {
  const { photos, loading, error, setPage, currentPage } = useCurated(1, 10);

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

      <Pagination
        totalPages={40}
        currentPage={currentPage}
        onPreviousPage={() => {
          setPage(currentPage - 1);
        }}
        onNextPage={() => {
          setPage(currentPage + 1);
        }}
      />
    </div>
  );
};

export default PhotoList;
