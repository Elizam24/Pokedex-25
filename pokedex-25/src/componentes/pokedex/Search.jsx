import { IoSearch } from "react-icons/io5";
import {useRef} from 'react'
import '../../styles/search.css';

function Search (handleSearch) {
  const inputRef =useRef ()

  const onSearch = () => {
    handleSearch(inputRef.current.value,);
  };
  
    return (
   <div className='search'>
    <div className='search_input'>
    <IoSearch />
   <input type="text" placeholder='Buscar un pokemon'
  ref= {inputRef}/>
  </div>

    <button onSearch={onSearch}
    className="search_btn" >
      Buscar</button>
 </div>
  )
}
export default Search