import Image from "next/image";
import React from "react";
import useSWR from "swr";

let fetcher = async (url) => {
  let data = await (await fetch(url)).json();
  return data;
};

const index = () => {
  const { data, error } = useSWR("https://dummyjson.com/products", fetcher);
  if (error) {
    return <>something went wrong! </>;
  }

  if (!data) {
    return <>loading...</>;
  }


  return (
    <div>
      {data.products.map((ele) => {
        return (
          <div key={ele.id}>
            <Image src={ele.thumbnail} alt="title" width={100} height={100} />
            <h1>{ele.title}</h1>
            <p>{ele.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default index;
