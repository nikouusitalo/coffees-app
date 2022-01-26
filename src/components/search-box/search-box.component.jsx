import 'bootstrap/dist/css/bootstrap.min.css';
import './search-box.component.css'


export const SearchBox = ({placeholder, handleChange}) => (  <input className="search form-control " type='search' placeholder={placeholder} onChange={handleChange}
      
      />)