import React from 'react';

class Search extends React.Component{
    render(){
        return(
            <form className='SearchWrapper'>
                <i className="fa fa-search"></i>
                <input className="Search" placeholder="Поиск" type="text"/>
            </form>
        )
    }
}
export default Search;