
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const Account = () => {
  const { id } = useParams();
  return (
    <>
    <Header />
      <div>account</div>
      <Link to="/">home</Link>
    </>
  )
}