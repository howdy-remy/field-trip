import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const Pack = () => {
  const { id } = useParams();
  return (
    <>
    <Header />
      <div>pack: {id} </div>
      <Link to="/">home</Link>
    </>
  )
}