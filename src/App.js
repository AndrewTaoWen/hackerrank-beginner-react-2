import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

export const sortByVotes = "votes";

export const sortByRecent = "recent";

function App({articles}) {

    const [sortBy, setSortBy] = useState(sortByVotes);

    const handleSortByVote = () => {
        setSortBy(sortByVotes);
    }

    const handleSortByRecent = () => {
        setSortBy(sortByRecent)
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={handleSortByVote}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={handleSortByRecent}>Most Recent</button>
            </div>
            <Articles articles={articles} sortBy={sortBy}/>
        </div>
    );

}

export default App;
