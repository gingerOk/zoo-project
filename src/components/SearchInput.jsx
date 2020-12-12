const SearchInput = ({searchItem, handleChange}) => {
  return (
    <div className="inputContainer col">
      <input
        type="text"
        placeholder="Search Animal..."
        value={searchItem}
        onChange={handleChange}
        className="col rounded-pill py-1"
      />
    </div>
  );
};

export default SearchInput;
