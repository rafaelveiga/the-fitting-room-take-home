import { useEffect, useState } from "react";
import PexelsService from "../services/pexels";

function useCurated(page: number, perPage: number) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCurated = async (page: number, perPage: number) => {
    PexelsService.getCuratedPhotos(page, perPage)
      .then((response) => {
        setPhotos(response.data.photos);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCurated(page, perPage);
  }, []);

  return { photos, loading, error };
}

export default useCurated;
