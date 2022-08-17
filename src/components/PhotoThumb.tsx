import { useState } from "react";
import { PexelsPhoto } from "../services/pexels";

const PhotoThumb = (props: PhotoThumbProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="rounded cursor-pointer h-96 w-full bg-cover bg-center group"
      style={{
        // The reason why we are skipping tailwind custom bg-[#xxx] custom style here
        // is because we only know the avg_color value during run time.
        backgroundColor: `${props.data.avg_color}`,
        backgroundImage: `url(${props.data.src.portrait})`,
      }}
    >
      <div className="opacity-0 group-hover:opacity-100 relative transition-all h-full rounded bg-gradient-to-t from-gray-700 to-transparent">
        <div className="absolute bottom-3 left-3">
          <small className="text-xs text-gray-400">picture by</small> <br />
          <span className="text-white font-bold">
            {props.data.photographer}
          </span>
        </div>
      </div>
    </div>
  );
};

interface PhotoThumbProps {
  data: PexelsPhoto;
}

export default PhotoThumb;
