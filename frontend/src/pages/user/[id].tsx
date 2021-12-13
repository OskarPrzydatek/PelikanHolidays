import React from "react";
import { NextPage } from "next";
import UserPanelLayout from "@layouts/UserPanelLayout/UserPanelLayout";

const UserSubpage: NextPage = () => {
  return <UserPanelLayout username="omkp" role="Admin" />;
};

export default UserSubpage;
