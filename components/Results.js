import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <div>
      {results.results.map((result) => (
        <Thumbnail key={result.id} movie={result} />
      ))}
    </div>
  );
}

export default Results;
