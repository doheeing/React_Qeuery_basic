import React from "react";
import { usePostQurey } from "./hooks/usePosts";

const NormalPage = () => {
  const { data, isLoading, isError, error } = usePostQurey();

  return (
    <div>
      {data?.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

export default NormalPage;
