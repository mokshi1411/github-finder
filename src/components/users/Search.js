import React, { useState } from "react";

function Search({ alertsetkardo, usersearchkardo }) {
  const [text, textkosetkardo] = useState("");
  const submitKarnePar = (e) => {
    e.preventDefault();
    if (text === "") {
      alertsetkardo("please enter something", "light");
    } else {
      usersearchkardo(text);
      textkosetkardo("");
    }
  };
  return (
    <div>
      <form
        className='form'
        onSubmit={(e) => {
          submitKarnePar(e);
        }}>
        <input
          type='text'
          name='text'
          placeholder='Search by Username......'
          value={text}
          onChange={(e) => {
            textkosetkardo(e.target.value);
          }}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  );
}

export default Search;
