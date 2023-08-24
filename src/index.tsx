import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BookmarkContext, BookmarkProvider } from "./Context/BookmarksContext";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BookmarkProvider>
      <App />
    </BookmarkProvider>
  </React.StrictMode>
);

export { BookmarkContext };
