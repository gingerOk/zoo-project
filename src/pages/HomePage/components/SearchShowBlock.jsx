const SearchShowBlock = ({searchResults}) => {
  return (
    <ul className="list-group">
      {searchResults.map(item => (
        <span key={item.id}>
          <div className="row my-2 mx-0">
            <div className="col-10">
            <div className="row">
              <div className="col ml-md-auto">
                <img src={item.imageLink} alt={item.name} style={{width: 70}} />
              </div>
              <div className="col ml-md-auto">
                <h4>{item.name}</h4>
                {/* <span>
                  {item ? item.characteristics["SCIENTIFIC NAME"] : ""}
                </span> */}
              </div>
            </div>
            </div>
          </div>
        </span>
      ))}
    </ul>
  );
};

export default SearchShowBlock;
