import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { PackHeader } from "../components/PackHeader";
import { Case, WeightUnit } from "../types";
import { CategoryHeader } from "../components/CategoryHeader";
import { Item } from "../components/Item";
import { useQuery, gql } from "@apollo/client";
import type { Item as ItemType } from "../graphql/generated";

const GET_ITEMS = gql`
  query getItems {
    items {
      id
      type
      description
      weight
      unit
      quantity
      case
    }
  }
`;

export const Pack = () => {
  const { id } = useParams();
  const { data } = useQuery(GET_ITEMS);
  return (
    <Layout>
      <PackHeader weight={10} unit={WeightUnit.LB}>
        PageTitle
      </PackHeader>
      <div>
        <CategoryHeader canEdit>Pack</CategoryHeader>
        {data?.items.map((item: ItemType) => (
          <Item
            key={id}
            type={item.type}
            description={item.description}
            weight={item.weight}
            unit={WeightUnit[item.unit as keyof typeof WeightUnit]}
            quantity={item.quantity}
            itemCase={Case[item.case as keyof typeof Case]}
            canEdit
            canDrag
          />
        ))}
        <CategoryHeader canEdit>Shelter</CategoryHeader>
        <CategoryHeader canEdit>Sleep System</CategoryHeader>
      </div>

      <div>pack: {id} </div>
      <Link to="/">home</Link>
    </Layout>
  );
};
