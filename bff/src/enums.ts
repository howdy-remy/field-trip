import { builder } from "./builder";

export enum WeightUnit {
  LB,
  OZ,
  G,
  KG
}
builder.enumType(WeightUnit, {
  name: 'WeightUnit',
});

export enum Case {
  WORN,
  CONSUMABLE
}
builder.enumType(Case, {
  name: 'Case',
});


