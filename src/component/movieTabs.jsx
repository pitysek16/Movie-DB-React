import React from 'react';


class MovieTabs extends React.Component {

    render(){
        const {sort_by, updateSortBy} = this.props;
        const handleClick = value => () => {
            updateSortBy(value);
        };

        const getClass = value => {
            return `nav-link ${sort_by === value ? "active" : ""}`
        };

        return (
        
    <div className="row mb-4 mt-4">
        <div className="col-2">
            <p>Choose:</p>
        </div>
        <div className="col-10">
        <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div className={getClass("popularity.desc")}
                        onClick = {handleClick("popularity.desc")}>
                        Popularity desc 
                    </div>
                </li>
                <li className="nav-item">
                    <div className={getClass("revenue.desc")}
                        onClick = {handleClick("revenue.desc")}>
                        Revenue desc
                    </div>
                </li>
        
                <li className="nav-item">
                    <div className={getClass("vote_average.desc")}
                        onClick = {handleClick("vote_average.desc")}>
                        Vote average desc
                    </div>
                </li>
     </ul>
     </div>
     </div>
     )
    }
}

export default MovieTabs