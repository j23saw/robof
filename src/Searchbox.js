import React from 'react';
const Searchbox = ({searchChange}) => {
    return(
        <div className = 'tc pa2'>
            <input 
            className = 'tc  pa3 br3' 
            type = 'search' 
            placeholder = 'Search Robots'
            onChange = {searchChange}/>
        </div>

    );
}
export default Searchbox;