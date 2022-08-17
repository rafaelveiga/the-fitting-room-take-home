import { useTrail, animated } from "react-spring";
import useCurated from "../hooks/useCurated";
import Pagination from "./Pagination";
import PhotoPlaceholder from "./PhotoPlaceholder";
import PhotoThumb from "./PhotoThumb";

const PhotoList = () => {
  const { photos, loading, error, setPage, currentPage, totalPages } =
    useCurated(1, 10);
  const trail = useTrail(photos.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: loading,
  });

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
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            {trail.map((styles, index) => (
              <animated.div style={styles}>
                <PhotoThumb data={photos[index]} />
              </animated.div>
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
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
