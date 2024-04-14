import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const Gear = () => {
  const { id } = useParams();
  return (
    <>
    <Header />
      <div>gear</div>
      <Link to="/">home</Link>
    </>
  )
}