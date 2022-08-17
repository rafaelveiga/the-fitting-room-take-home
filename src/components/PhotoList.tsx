import useCurated from "../hooks/useCurated";
import { PexelsPhoto } from "../services/pexels";
import Pagination from "./Pagination";
import PhotoPlaceholder from "./PhotoPlaceholder";
import PhotoThumb from "./PhotoThumb";

const PhotoList = () => {
  const { photos, loading, error, setPage, currentPage } = useCurated(1, 10);

  return (
    <div className="container mx-auto mt-3">
      {/* ==== Loading State ==== */}
      {loading && <PhotoPlaceholder />}

      {/* ==== Error State ==== */}
      {!loading && error && (
        <div className="text-red-500 shadow py-5 px-5 text-center">
          An error ocurred while loading the pictures. Please try again later.
        </div>
      )}

      {/* ==== Success State ===== */}
      {!loading && !error && photos.length > 0 && (
        <>
          <div className="grid grid-cols-5 gap-5">
            {photos.map((photo: PexelsPhoto) => (
              <PhotoThumb data={photo} />
            ))}
          </div>
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
        </>
      )}
    </div>
  );
};

export default PhotoList;
