import { Context } from "./db";
import { Resolvers } from "./generated/graphql";

export const resolvers: Resolvers<Context> = {
    Query: {
        customers: async (parent, args, cxt) =>
            await cxt.db.customers.findMany(),
        customer: async (parent, args, cxt) =>
            await cxt.db.customers.findUnique({ where: { id: args.id } }),
        // addresses: async (parent, args, cxt) => await cxt.db.address.findMany(),
        // address: async (parent, args, cxt) =>
        //     await cxt.db.address.findUnique({ where: { id: args.id } }),
        states: async (parent, args, cxt) => await cxt.db.state.findMany(),
        state: async (parent, args, cxt) =>
            await cxt.db.state.findUnique({ where: { id: args.id } }),
        images: async (parent, args, cxt) => await cxt.db.images.findMany(),
        image: async (parent, args, cxt) =>
            await cxt.db.images.findUnique({ where: { id: args.id } }),
        products: async (parent, args, cxt) => await cxt.db.products.findMany(),
        product: async (parent, args, cxt) =>
            await cxt.db.products.findUnique({ where: { id: args.id } }),
        // imagesOnProducts: async (parent, args, cxt) =>
        //     await cxt.db.imagesOnProducts.findMany(),
        // imagesOnProduct: async (parent, args, cxt) =>
        //     await cxt.db.imagesOnProducts.findUnique({
        //         where: { id: args.id },
        //     }),
        productsOptions: async (parent, args, cxt) =>
            await cxt.db.productsOptions.findMany(),
        productOptions: async (parent, args, cxt) =>
            await cxt.db.productsOptions.findUnique({ where: { id: args.id } }),
        brands: async (parent, args, cxt) => await cxt.db.brands.findMany(),
        brand: async (parent, args, cxt) =>
            await cxt.db.brands.findUnique({ where: { id: args.id } }),
        categories: async (parent, args, cxt) =>
            await cxt.db.categories.findMany(),
        category: async (parent, args, cxt) =>
            await cxt.db.categories.findUnique({ where: { id: args.id } }),
        subCategories: async (parent, args, cxt) =>
            await cxt.db.subCategories.findMany(),
        subCategory: async (parent, args, cxt) =>
            await cxt.db.subCategories.findUnique({ where: { id: args.id } }),
        carts: async (parent, args, cxt) => await cxt.db.cart.findMany(),
        cart: async (parent, args, cxt) =>
            await cxt.db.cart.findUnique({ where: { id: args.id } }),
        shippings: async (parent, args, cxt) =>
            await cxt.db.shipping.findMany(),
        shipping: async (parent, args, cxt) =>
            await cxt.db.shipping.findUnique({ where: { id: args.id } }),
        payments: async (parent, args, cxt) => await cxt.db.payments.findMany(),
        payment: async (parent, args, cxt) =>
            await cxt.db.payments.findUnique({ where: { id: args.id } }),
    },
    Mutation: {
        createCustomer: async (parent, args, cxt) =>
            await cxt.db.customers.create({
                data: {
                    email,
                },
            }),
    },
};
