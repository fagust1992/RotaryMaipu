import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

const Profile = () => {
  const { auth, getProfile } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfile = async () => {
      await getProfile();
    };

    fetchProfile();
  }, []);

  return auth;
};

export default Profile;
