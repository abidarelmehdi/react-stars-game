import React from "react";
import GithubItem from "./GithubItem";
export default function GithubList() {
  const listUser = [
    {
      login: "abidar95",
      id: 8204941,
      node_id: "MDQ6VXNlcjgyMDQ5NDE=",
      avatar_url: "https://avatars0.githubusercontent.com/u/8204941?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/abidar95",
      html_url: "https://github.com/abidar95",
      followers_url: "https://api.github.com/users/abidar95/followers",
      following_url:
        "https://api.github.com/users/abidar95/following{/other_user}",
      gists_url: "https://api.github.com/users/abidar95/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/abidar95/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/abidar95/subscriptions",
      organizations_url: "https://api.github.com/users/abidar95/orgs",
      repos_url: "https://api.github.com/users/abidar95/repos",
      events_url: "https://api.github.com/users/abidar95/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/abidar95/received_events",
      type: "User",
      site_admin: false,
      name: "Abidar El Mehdi",
      company: null,
      blog: "",
      location: null,
      email: null,
      hireable: true,
      bio: null,
      public_repos: 8,
      public_gists: 0,
      followers: 1,
      following: 0,
      created_at: "2014-07-18T22:01:35Z",
      updated_at: "2020-04-04T21:08:24Z",
    },
  ];
  return (
    <div className="mt-16 bg-white overflow-hidden shadow rounded-lg">
      <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
        <span className="text-xl text-gray-800">Github Accounts</span>
      </div>
      <ul>
        {listUser.map((user) => (
          <GithubItem {...user} key={user.login} />
        ))}
      </ul>
    </div>
  );
}
