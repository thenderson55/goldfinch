import { GetStaticProps } from "next";
import React from "react";
import User, { UserType } from "../components/User";

function UserList({ users }: { users: UserType[] }) {
  return (
    <div>
      UserList
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <User user={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log("Data", data);

  return {
    props: {
      users: data,
    },
  };
};

export default UserList;
