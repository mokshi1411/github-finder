import React, { Fragment, useState } from "react";
import Search from "./Search";
import Users from "./Users";
import Alert from "./Alert";
import axios from "axios";
import Clear from "./Clear";

const Home = () => {
  const [alert, setAlert] = useState(null);
  const [users, userkosetkardo] = useState([]);
  const [loading, loadingkosetkardo] = useState(false);
  const searchkardo = async (text) => {
    loadingkosetkardo(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&clint_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`,
    );

    loadingkosetkardo(false);
    userkosetkardo(res.data.items);
  };
  const saddiSiStateSetkardo = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  return (
    <Fragment>
      <Alert alertInfo={alert} />
      <Search
        alertsetkardo={saddiSiStateSetkardo}
        usersearchkardo={searchkardo}
      />
      {users.length > 0 && (
        <Clear
          clearkardosab={() => {
            userkosetkardo([]);
          }}
        />
      )}
      <Users loading={loading} users={users} />
    </Fragment>
  );
};

export default Home;
