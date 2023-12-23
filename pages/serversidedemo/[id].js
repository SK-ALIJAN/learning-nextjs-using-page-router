import React from "react";

const segment = (props) => {
  return <h1>{props.id}</h1>;
};

export default segment;

export async function getServerSideProps(context) {
  let { params } = context;
  let { id } = params;

  return {
    props: {
      id,
    },
  };
}
