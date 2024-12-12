import React from 'react';
import { sortByVotes } from '../App';

const compareVotes = (a,b) => {
    return (a.upvotes < b.upvotes);
}

const compareDate = (a,b) => {
    return (a.date < b.date);
}

function Articles({articles, sortBy}) {

    const sortedArticles = articles.sort(sortBy === sortByVotes ? compareVotes : compareDate);

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {sortedArticles.map((article, index) => {
                return (
                    <tr data-testid="article" key={index}>
                    <td data-testid="article-title">{article.title}</td>
                    <td data-testid="article-upvotes">{article.upvotes}</td>
                    <td data-testid="article-date">{article.date}</td>
                    </tr>
                );
                })}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
