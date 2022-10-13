import { useRouter } from "next/router";
import React from "react";

const ProjectidPage = () => {
  const {query}=useRouter()
  console.log({query});
  return <div>Project for Special Client</div>;
};

export default ProjectidPage;
