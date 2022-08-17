import { useEffect, useState } from "react";
import PexelsService from "../services/pexels";

function useCurated(page: number, perPage: number) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setPage] = useState(page);
  const [currentPerPage, setPerPage] = useState(perPage);

  useEffect(() => {
    setLoading(true);

    PexelsService.getCuratedPhotos(currentPage, currentPerPage)
      .then((response) => {
        setPhotos(response.data.photos);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage, currentPerPage]);

  return {
    photos,
    loading,
    error,
    setPage,
    setPerPage,
    currentPage,
    currentPerPage,
  };
}

export default useCurated;
