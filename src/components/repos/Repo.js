import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";  // Ensure the path is correct

const Repos = ({ repos }) => {
  return (
    <div>
      <h2>Repositories</h2>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
