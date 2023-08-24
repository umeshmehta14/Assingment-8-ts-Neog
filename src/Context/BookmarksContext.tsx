import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { InitialStateType } from "../Module/BookmarkType";
import { BookmarkAction, BookmarkReducer } from "../Reducer/BookmarkReducer";

type BookmarksContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<BookmarkAction>;
};

export const BookmarkContext = createContext<BookmarksContextType | undefined>(
  undefined
);

export const BookmarkProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const initialState: InitialStateType = {
    bookmarks: []
  };

  const [state, dispatch] = useReducer(BookmarkReducer, initialState);

  return (
    <BookmarkContext.Provider value={{ state, dispatch }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmark = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmark must be use within the Bookmark provider");
  }
  return context;
};
