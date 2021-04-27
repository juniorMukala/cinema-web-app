import "../style.css";


function SearchBar(props) {

  return <input onChange={props.onChange} placeholder="Rechercher par nom" type="text" name="SearchBar" id="SearchBar" />;
}

export default SearchBar;