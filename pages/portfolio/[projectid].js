import React from "react";
import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  let router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // send a request to some backend server
  // to fetch the piece of data with an id of router.quary.projectid

  return <div>{router.pathname}</div>;
};

export default PortfolioProjectPage;
