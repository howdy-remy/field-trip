import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { PackHeader } from "../components/PackHeader";

export const Pack = () => {
  const { id } = useParams();
  return (
    <Layout>
      <PackHeader>PageTitle</PackHeader>
      <div>pack: {id} </div>
      <Link to="/">home</Link>
    </Layout>
  );
};
