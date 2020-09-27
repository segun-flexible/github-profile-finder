import React, { useState, useEffect } from "react";

import searchUser from "../helpers/searchUser";
import Error from "./Error";
import ProfileFooter from "./ProfileFooter";
import ProfileHeader from "./ProfileHeader";
import ProfileImg from "./ProfileImg";
import SearchBox from "./Search";

const App = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("github-user")) || null
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //Saving Profile Data To Localstorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("github-user", JSON.stringify(user));
    }
  }, [user]);

  //Handling Profile Searching
  const handleSearch = (str) => {
    setLoading(true);
    setError("");
    setUser(null);
    searchUser(str).then((res) => {
      setLoading(false);
      typeof res === "object" ? setUser(res) : setError(res);
    });
  };
  return (
    <div className="container">
      <div className="wrapper">
        {error && <Error message={error} />}
        {loading && <h3>Fetching Data ....</h3>}
        {user && (
          <>
            {user && <ProfileImg user={user} />}

            <div className="information">
              {user && (
                <>
                  {user.name && <ProfileHeader user={user} />}

                  <ProfileFooter user={user} />
                </>
              )}
            </div>
          </>
        )}
      </div>

      <SearchBox handleSearch={handleSearch} />
    </div>
  );
};

export default App;
