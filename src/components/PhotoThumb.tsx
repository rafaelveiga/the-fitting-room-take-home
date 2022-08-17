import { useState } from "react";
import { PexelsPhoto } from "../services/pexels";

const PhotoThumb = (props: PhotoThumbProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="rounded cursor-pointer h-96 w-full bg-cover bg-center"
      style={{
        // The reason why we are skipping tailwind custom bg-[#xxx] custom style here
        // is because we only know the avg_color value during run time.
        backgroundColor: `${props.data.avg_color}`,
        backgroundImage: `url(${props.data.src.portrait})`,
      }}
    >
      {/* <img
        className="mb-4"
        src={props.data.src.original}
        style={{
          opacity: isLoading ? 0 : 1,
        }}
        onLoad={() => {
          setIsLoading(false);
        }}
      /> */}
    </div>
  );
};

interface PhotoThumbProps {
  data: PexelsPhoto;
}

export default PhotoThumb;
