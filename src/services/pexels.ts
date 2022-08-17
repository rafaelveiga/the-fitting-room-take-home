import axios, { AxiosResponse } from "axios";
import { PEXELS_API_BASE_URL, PEXELS_API_KEY } from "../utils/constants";

class PexelsService {
  getCuratedPhotos(page: number, perPage: number): Promise<AxiosResponse> {
    return axios.get<PexelsCuratedResponse>(`${PEXELS_API_BASE_URL}/curated`, {
      headers: {
        Authorization: `${PEXELS_API_KEY}`,
      },
      params: {
        page,
        per_page: perPage,
      },
    });
  }
}

export default new PexelsService();

interface PexelsCuratedResponse {
  next_page: string;
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  total_results: number;
}

export interface PexelsPhoto {
  alt: string;
  avg_color: string;
  height: number;
  id: string;
  liked: boolean;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: {
    landscape: string;
    large: string;
    large2x: string;
    medium: string;
    original: string;
    portrait: string;
    small: string;
    tiny: string;
  };
  url: string;
  width: number;
}
