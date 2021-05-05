import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ movie }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="p-2 ease-in transform cursor-pointer group transition-200 sm:hover:scale-105 hover:z-50 duration"
    >
      <Image
        layout="responsive"
        src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="max-w-md truncate">{movie.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {movie.title || movie.original_name}
        </h2>
        <p className="flex items-center capitalize opacity-0 group-hover:opacity-100">
          {movie.media_type && `${movie.media_type} •`}{" "}
          {movie.release_date || movie.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
