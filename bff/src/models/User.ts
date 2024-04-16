import { builder } from "../builder";
import { prisma } from "../prismaClient";

builder.prismaObject("User", {
  fields: t => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    name: t.exposeString('name')
  })
});

builder.queryField("users", (t) =>
  t.prismaField({
    type: ["User"],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.user.findMany({ ...query });
    },
  })
);