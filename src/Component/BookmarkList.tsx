import React from "react";
import { useBookmark } from "../Context/BookmarksContext";
import { Bookmark } from "../Module/BookmarkType";

interface BookmarkListType {
  bookmarks: Bookmark[];
}

const BookmarkList: React.FC<BookmarkListType> = ({ bookmarks }) => {
  const { dispatch } = useBookmark();
  return (
    <>
      <div>
        {bookmarks?.map(({ id, url, title }) => {
          return (
            <>
              <p>{title}</p>
              <a target="_blank" href={url}>
                {url}
              </a>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_BOOK_MARK", payload: id })
                }
              >
                Remove
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default BookmarkList;
