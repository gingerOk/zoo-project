const SearchInput = ({searchItem, handleChange}) => {
  return (
    <div className="inputContainer col">
      <input
        type="text"
        placeholder="Search Animal..."
        value={searchItem}
        onChange={handleChange}
        className="col"
      />
    </div>
  );
};

export default SearchInput;
