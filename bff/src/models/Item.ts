import { WeightUnit, Case } from "@prisma/client";
import { builder } from "../builder";
import { prisma } from "../prismaClient";

builder.prismaObject("Item", {
  findUnique: (item) => ({id: item.id}),
  fields: t => ({
    id: t.exposeID('id'),
    user: t.relation('user'),
    type: t.exposeString('type'),
    description: t.exposeString('description', {
      nullable: true
    }),
    weight: t.exposeFloat('weight'),
    unit: t.exposeString('unit'),
    quantity: t.exposeInt('quantity'),
    case: t.exposeString('case', { nullable: true })
  })
});

builder.queryField('items', (t) => 
  t.prismaField({
    type: ["Item"],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.item.findMany({ ...query });
    },
  })
);

builder.queryField('item', (t) => 
  t.prismaField({
    type: "Item",
    args: {
      id: t.arg.int({required: true})
    },
    resolve: async (query, root, args, ctx, info) => {
      return prisma.item.findUniqueOrThrow({ ...query, where: {id: args.id} });
    },
  })
);

builder.mutationField('createItem', (t) =>
  t.prismaField({
    type: "Item",
    args: {
      type: t.arg.string({required: true}),
      description: t.arg.string(),
      weight: t.arg.float({required: true}),
      unit: t.arg.string({required: true, }),
      quantity: t.arg.int({required: true}),
      case: t.arg.string(),
      userId: t.arg.int({required: true})
    },
    resolve: (query, root, args, ctx, info) => {
      const item = {
        userId: args.userId,
        type: args.type,
        description: args.description,
        weight: args.weight,
        unit: WeightUnit[args.unit as keyof typeof WeightUnit],
        quantity: args.quantity,
        case: args.case?.length ? Case[args.case as keyof typeof Case] : null,
      }
      return prisma.item.create({
        data: item
      })
    }
  })
);