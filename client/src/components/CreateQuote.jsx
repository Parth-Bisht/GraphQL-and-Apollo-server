import React, { useState } from "react";

const CreateQuote = () => {
  const [quote, setQuote] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quote);
  };
  return (
    <div className="container my-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Write your quote here"
        />
        <button type="submit" className="btn green">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateQuote;
