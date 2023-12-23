import React from "react";

const index = ({ data }) => {
  return (
    <div>
      <h1>
        {data.name} {data.num1}
      </h1>
    </div>
  );
};

export default index;

export async function getStaticProps(context) {
  let data = {
    name: "alijan",
    num1: 1,
  };

console.log(context)

  return {
    props: {
      data,
    },

    revalidate: 2,
  };
}
