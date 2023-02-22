import React from "react";

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="What do you think about now?"
        className="form-control new-post-label"
      />
      <button type="submit" className="btn btn-outline-secondary">
        POST
      </button>
    </form>
  );
};

export default PostAddForm;
