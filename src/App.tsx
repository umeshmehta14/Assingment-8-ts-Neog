import "./styles.css";
import Header from "./Component/Header";
import BookmarkForm from "./Component/BookmarkForm";
import BookmarkList from "./Component/BookmarkList";
import { useBookmark } from "./Context/BookmarksContext";

export default function App() {
  const { state } = useBookmark();
  const { bookmarks } = state;

  return (
    <div className="App">
      <Header title={"Assingment 8"} />
      <BookmarkForm />
      <BookmarkList bookmarks={bookmarks} />
    </div>
  );
}
