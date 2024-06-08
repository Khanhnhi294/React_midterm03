import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      <p>{repo.description}</p>
      <div className="badge badge-dark">Stars: {repo.stargazers_count}</div>
      <div className="badge badge-primary">Watchers: {repo.watchers_count}</div>
      <div className="badge badge-success">Forks: {repo.forks_count}</div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
