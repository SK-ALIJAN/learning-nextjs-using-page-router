import Link from "next/link";
import React from "react";

const index = ({ data }) => {
  return (
    <div>
      {data.map((ele) => {
        return (
          <Link key={ele.id} href={`/staticdemo/${ele.id}`}>
            <h1>{ele.title}</h1>
            <p>{ele.body}</p>
            <hr />
            <br />
          </Link>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  let data = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();

  return {
    props: {
      data,
    },
  };
};

export default index;
