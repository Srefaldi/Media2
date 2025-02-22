import React, { useEffect } from "react";
import Layout from "./Layout";
import Home from "../../components/Home/HomeComponents";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import Welcome from "../../components/LoginPage/Welcome";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  return (
    <Layout>
      <Welcome/>
      {user?.role === "user" && <Home />}
    </Layout>
  );
};

export default Dashboard;

