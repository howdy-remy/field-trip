import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const Account = () => {
  return (
    <>
      <Header />
      <div>account</div>
      <Link to="/">home</Link>
    </>
  );
};
