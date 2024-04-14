import { Link, useParams } from "react-router-dom";

export const Pack = () => {
  const { id } = useParams();
  return (
    <>
      <div>pack: {id} </div>
      <Link to="/">home</Link>
    </>
  )
}