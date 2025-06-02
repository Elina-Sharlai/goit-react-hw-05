import { useSearchParams } from "react-router-dom";
import css from "./MovieSearch.module.css";

export default function MovieSearch() {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    if (query) {
      setSearchParams({ query });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" className={css.input} />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </div>
  );
}
