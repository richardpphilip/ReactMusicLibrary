import React from 'react';
const SearchBar = (props) =>{
        return(
            <div>
                <hr />
                <h2>Search</h2>
                    <div className='row col-align'>
                        <div className='col-md-4'>
                            <label>Title Search:</label>
                            <input type='text'  onChange={props.handleInput}/>
                        </div>
                    </div>
            </div>
        )
}
export default SearchBar