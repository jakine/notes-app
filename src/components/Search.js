import { useState } from "react";
import styles from "./Search.module.css";
import { useSelector } from "react-redux";
const Search = (props) => {
  const noteListDataTag = useSelector((state) => state.notes.allTags);
  
  console.log("TAGS", noteListDataTag);

  // searching logic
  const [searchText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false);

  const searchHandler = () => {
    const oppositeSearched = !searched;
    setSearched(oppositeSearched);
    props.searchHandlerr({ searchText, oppositeSearched });
  };

  // date logic
  const [date, setDate] = useState('')

  const onChangeDate = (e) => {
    const selectedDate = new Date(e);
    const formattedDate = `${selectedDate.getDate()}/${
      selectedDate.getMonth() + 1
    }/${selectedDate.getFullYear()}`;
    setDate(formattedDate)
  };
  console.log(date)



  const searchBydate = () => {
    props.searchBydateHandler({ searchText });
  };

  return (
    <div className={styles.searchBar}>
      <div>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="text to search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} onClick={searchHandler}>
          {searched ? "cancel search " : "search"}
        </button>
      </div>

      <div>
      <input
          className={styles.searchInput}
          type="text"
          placeholder="write tag"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} onClick={searchHandler}>
          search by tag
        </button>
      </div>

      <div>
        <input
          className={styles.searchInput}
          type="date"
          name="select date"
          onChange={(e) => onChangeDate(e.target.value)}
        />
        <button className={styles.searchButton} onClick={searchBydate}>
          search by date 
        </button>
      </div>
    </div>
  );
};

export default Search;
