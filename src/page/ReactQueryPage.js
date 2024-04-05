import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { usePostQurey } from "./hooks/usePosts";

const ReactQueryPage = () => {
  const ids = [1, 2, 3, 4];

  const FetchPostDetail = (id) => {
    return axios.get(`http://localhost:3005/posts/${id}`);
  };
  const results = useQueries({
    queries: ids.map((id) => {
      return {
        querykey: ["post", id],
        queryFn: () => FetchPostDetail(id),
      };
    }),
    combine : (results)=>{
      return{
        data : results.map((result)=>result.data)
      }
    }
  });


  console.log("rrr",results)

  // if (isLoading) {
  //   return <h1>Loading</h1>;
  // }
  // if (isError) {
  //   return <h1>{error.message}</h1>;
  // }

  return (
    <div>
      {/* {data?.map((item) => (
        <div>{item.title}</div>
      ))}
      <button onClick={refetch}>post 리스트 다시 들고오기</button> */}
    </div>
  );
};

export default ReactQueryPage;
