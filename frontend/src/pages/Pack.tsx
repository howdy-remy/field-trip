import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { PackHeader } from "../components/PackHeader";
import { Case, WeightUnit } from "../types";
import { CategoryHeader } from "../components/CategoryHeader";
import { Item } from "../components/Item";

export const Pack = () => {
  const { id } = useParams();
  return (
    <Layout>
      <PackHeader weight={10} unit={WeightUnit.LB}>
        PageTitle
      </PackHeader>
      <div>
        <CategoryHeader canEdit>Pack</CategoryHeader>
        <Item
          type="Pack"
          description="HMG Southwest 5700 — 55L — Black"
          weight={34.78}
          unit={WeightUnit.OZ}
          quantity={1}
          itemCase={Case.WORN}
          canEdit
          canDrag
        />
        <Item
          type="Pack"
          description="HMG Southwest 5700 — 55L — Black"
          weight={4.78}
          unit={WeightUnit.OZ}
          quantity={1}
          itemCase={Case.WORN}
          canEdit
          canDrag
        />{" "}
        <Item
          type="Pack"
          description="HMG Southwest 5700 — 55L — Black"
          weight={34.7}
          unit={WeightUnit.OZ}
          quantity={1}
          itemCase={Case.WORN}
          canEdit
          canDrag
        />{" "}
        <Item
          type="Pack"
          description="HMG Southwest 5700 — 55L — Black"
          weight={134.78}
          unit={WeightUnit.OZ}
          quantity={1}
          itemCase={Case.WORN}
          canEdit
          canDrag
        />
        <CategoryHeader canEdit>Shelter</CategoryHeader>
        <CategoryHeader canEdit>Sleep System</CategoryHeader>
      </div>

      <div>pack: {id} </div>
      <Link to="/">home</Link>
    </Layout>
  );
};
