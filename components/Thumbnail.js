import Image from "next/image";

function Thumbnail({ movie }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      <Image
        layout="responsive"
        src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        height={1080}
        width={1920}
      />
      <div></div>
    </div>
  );
}

export default Thumbnail;
