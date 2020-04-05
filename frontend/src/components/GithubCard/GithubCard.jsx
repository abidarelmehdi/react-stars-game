import React, { useState } from "react";
import AddUserButton from "./AddUserButton";
import GithubList from "./GithubList";

export default function GithubCard() {
  const [users, setUsers] = useState([
    {
      login: "abidar95",
      avatar_url: "https://avatars0.githubusercontent.com/u/8204941?v=4",
      html_url: "https://github.com/abidar95",
      name: "Abidar El Mehdi",
      public_repos: 8,
      followers: 1,
      created_at: "2014-07-18T22:01:35Z",
    },
  ]);
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="mt-16 bg-white overflow-hidden shadow rounded-lg">
      <div className="-ml-4 -mt-2 px-4 py-5 border-b border-gray-200 sm:px-6 flex items-center justify-between flex-wrap sm:flex-no-wrap">
        <div className="ml-4 mt-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Github Accounts
          </h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <AddUserButton onSubmit={addUser} />
        </div>
      </div>
      <GithubList users={users} />
    </div>
  );
}
