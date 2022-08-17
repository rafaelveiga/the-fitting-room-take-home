import axios, { Axios } from "axios";
import { PEXELS_API_BASE_URL, PEXELS_API_KEY } from "../utils/constants";

class PexelsService {
  getCuratedPhotos(page: number, perPage: number): Promise<Axios> {
    return axios.get(`${PEXELS_API_BASE_URL}/curated`, {
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
