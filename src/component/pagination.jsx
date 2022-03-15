import React from 'react';

class PagePagination extends React.Component {
    render(){
        const {nextPage,previousPage} = this.props;


        return (
            <>
                <div className="row mb-4 mt-4 d-flex justify-content-center">
                    <button type="button" className="col-3 mr-1 btn btn-light" onClick={previousPage}>Prev</button>
                    <button type="button" className="col-3 ml-1 btn btn-light" onClick={nextPage}>Next</button>
                </div>
            </>
        )
    }
}

export default PagePagination;