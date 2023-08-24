import { Bookmark, InitialStateType } from "../Module/BookmarkType";

interface AddBookmarkAction {
  type: "ADD_BOOK_MARK";
  payload: Bookmark;
}

interface RemoveBookmarkAction {
  type: "REMOVE_BOOK_MARK";
  payload: number;
}

export type BookmarkAction = AddBookmarkAction | RemoveBookmarkAction;

interface BookmarkReducerType {
  (state: InitialStateType, action: BookmarkAction): InitialStateType;
}
export const BookmarkReducer: BookmarkReducerType = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK_MARK":
      return { ...state, bookmarks: [...state.bookmarks, action.payload] };

    case "REMOVE_BOOK_MARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.payload
        )
      };
  }
};
