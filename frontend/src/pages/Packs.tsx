import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Header } from "../components/Header/Header";

export const Packs = () => (
  <>
    <Header />
    <div>packs</div>
    <Link to="/packs/1">
      <Button $variant="primary">pack 1</Button>
    </Link>
    <Link to="/packs/2">
      <Button $variant="primary">pack 2</Button>
    </Link>
    <Link to="/packs/3">
      <Button $variant="primary">pack 3</Button>
    </Link>

    <Link to="2">pack 2</Link>
    <Link to="3">pack 3</Link>
  </>
);
