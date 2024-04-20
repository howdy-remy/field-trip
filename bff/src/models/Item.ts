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
)

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
) 