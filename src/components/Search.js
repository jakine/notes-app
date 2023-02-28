import { useState } from "react";
import styles from "./Search.module.css";
import { useSelector } from "react-redux";
const Search = (props) => {
  // search with text logic
  const [searchText, setSearchText] = useState("");
  const [searchedByText, setSearchedByText] = useState(false);

  const searchHandler = () => {
    const oppositeSearched = !searchedByText;
    setSearchedByText(oppositeSearched);
    props.searchHandlerr({ searchText, oppositeSearched });
  };

  // date logic
  const [date, setDate] = useState("");
  const [searchByDate, setSearchByDate] = useState(false);

  const onChangeDate = (e) => {
    const selectedDate = new Date(e);
    const formattedDate = `${selectedDate.getDate()}/${
      selectedDate.getMonth() + 1
    }/${selectedDate.getFullYear()}`;
    setDate(formattedDate);
    const oppositeSearched = !searchByDate;
    setSearchByDate(oppositeSearched);
    props.searchBydateHandler({ formattedDate,oppositeSearched });
  };

  const searchBydate = () => {
    const selectedDate = new Date();
    const formattedDate = `${selectedDate.getDate()}/${
      selectedDate.getMonth() + 1
    }/${selectedDate.getFullYear()}`;
    setDate(formattedDate);
    const oppositeSearched = !searchByDate;
    setSearchByDate(oppositeSearched);
    props.searchBydateHandler({ formattedDate, oppositeSearched });
  };

  // tag logic here

  const [searchTag, setSearchTag] = useState("");
  const [searchedByTag, setSearchedByTag] = useState(false);

  const searchTagHandler = () => {
    const oppositeSearched = !searchedByTag;
    setSearchedByTag(oppositeSearched);
    props.searchTagHandlerr({ searchTag, oppositeSearched });
  };

  return (
    <div className={styles.searchBar}>
      {/* the search TEXT */}
      <div>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="text to search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} onClick={searchHandler}>
          {searchedByText ? "cancel search " : "search"}
        </button>
      </div>
      {/* the search TAG */}

      <div>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="write tag"
          onChange={(e) => setSearchTag(e.target.value)}
        />
        <button className={styles.searchButton} onClick={searchTagHandler}>
          {searchedByTag ? "cancel tags " : "search by tags"}
        </button>
      </div>
      {/* the search Date */}

      <div>
        <input
          className={styles.searchInput}
          type="date"
          name="select date"
          onChange={(e) => onChangeDate(e.target.value)}
        />
        {searchByDate ? (
          <button className={styles.searchButton} onClick={searchBydate}>
            cancel search
          </button>
        ) : (
          <button className={styles.searchButton} onClick={searchBydate}>
            search by date
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
