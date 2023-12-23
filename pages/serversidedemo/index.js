import React from "react";

const index = ({ name }) => {
  return <div>{name}</div>;
};

export default index;

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;
  
  return {
    props: {
      name: "alijan",
    },
  };
};
