const { forwardTo } = require("prisma-binding");

const Query = {
  // async items(parent, args, ctx, info) {
  // Prisma knows to wait for a promise to resolve
  // if a promise is returned, but we are returning
  // the actual data anyways to be able to debug in
  // here.
  //   const items = await ctx.db.query.items();
  //   return items;
  // }

  // To forward resolvers to those generated by prisma,
  // we can use:
  items: forwardTo("db"),
  item: forwardTo("db")

  // Later, you can go in and write custom resolvers
  // that do what you need them to do.
};

module.exports = Query;
