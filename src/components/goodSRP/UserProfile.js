import React from "react";
import useFetchUser from "./useFetchUser";
import Loading from "./Loading";
import Error from "./Error";

const UserProfile = () => {
  const { user, loading, error } = useFetchUser();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;
