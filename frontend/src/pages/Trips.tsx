import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const Trips = () => {
  const { id } = useParams();
  return (
    <>
    <Header />
      <div>trips</div>
      <Link to="/">home</Link>
    </>
  )
}