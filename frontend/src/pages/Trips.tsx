import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const Trips = () => {
  return (
    <>
      <Header />
      <div>trips</div>
      <Link to="/">home</Link>
    </>
  );
};
