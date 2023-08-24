import React, { useState } from "react";
import { useBookmark } from "../Context/BookmarksContext";

interface InputField {
  title: string;
  url: string;
}

const BookmarkForm: React.FC = () => {
  const { dispatch } = useBookmark();

  const [inputField, setInputField] = useState<InputField>({
    title: "",
    url: ""
  });
  const { title, url } = inputField;

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK_MARK",
      payload: { id: Date.now(), ...inputField }
    });
    setInputField({ title: "", url: "" });
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={title}
          onChange={({ target }) =>
            setInputField({ ...inputField, title: target.value })
          }
          required
        />
      </div>
      <div>
        <label htmlFor="">Url</label>
        <input
          type="url"
          value={url}
          onChange={({ target }) =>
            setInputField({ ...inputField, url: target.value })
          }
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default BookmarkForm;
