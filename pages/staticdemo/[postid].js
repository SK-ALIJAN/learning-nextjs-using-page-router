import React from "react";

const Post = ({ data }) => {
  if (!data) {
    return <>loading...</>;
  }
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <hr />
    </div>
  );
};

export default Post;

// becouse of dynamic page , next does not know which page would be
// predefined that's we say this next js that this were such page that should be predifined using getStaticPath
export const getStaticPaths = async () => {
  let data = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();

  let paths = data.map((ele) => {
    let id = ele.id.toString();
    return {
      params: { postid: id },
    };
  });

  // if fallback is false mean , i predefined page already to next
  // if it is false but user try to use missing segment , then that scenario , it might give me error here
  // if fallback is true , then still render the page there are no segment found ((staticdemo/2000))
  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  let { postid } = context.params;
  let data = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
  ).json();

  if (Object.keys(data).length === 0) {
    return { notFound: true };
  } // this is becouse if user put any segment(staticdemo/2000) which is missing , for that case it's trigger notfound page

  return {
    props: { data },
  };
};
