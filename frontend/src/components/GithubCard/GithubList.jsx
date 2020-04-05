import React from "react";
import GithubItem from "./GithubItem";
export default function GithubList(props) {
  return (
    <ul>
      {props.users.map((user) => (
        <GithubItem {...user} key={user.login} />
      ))}
    </ul>
  );
}
