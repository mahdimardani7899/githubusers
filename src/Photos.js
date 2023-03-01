import React from "react";
import { useFetch } from "./hooks";

function Photos() {
  const [data, loading] = useFetch(
    "https://api.github.com/users"
  );

  return (
    <>

      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div>
            <h1>Github Users</h1>
  
        <ul>
          {data.map(({ id, login, avatar_url, html_url}) => (
            <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h2>{login}</h2>
              <a className="btn" href={html_url} target="_blank">
                profile
              </a>
            </div>
          </li>
          ))}
        </ul>
        </div>
      )}
    </>
  );
}

export default Photos;