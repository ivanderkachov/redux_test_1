import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUsername, addUser, addRepo } from "../redux/reducers/users";

const Dummy = () => {
  const dispatch = useDispatch();
  //const userName = useSelector((store) => store.users.name);
  const userList = useSelector((store) => store.users.list);
  const userRepos = useSelector((store) => store.users.repos);
  return (
    <div>
      <div>Enter Name: </div>
      <input
        type="text"
        onChange={(event) => dispatch(updateUsername(event.target.value))}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            dispatch(addUser(event.target.value));
            dispatch(addRepo());
            event.target.value = "";
          }
        }}
      />
      {userList.map((it) => {
        return <div> {it} </div>;
      })}
      {userRepos.map((it) => {
        return <div key = {it.name}> <Link to = {`/${it.name}`}> {it.name} </Link> </div>;
      })}
    </div>
  );
};

export default Dummy;
