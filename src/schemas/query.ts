import { prisma } from "../db";

const Query = {
    customers: () => prisma.customers.findMany(),
    customer: (parent: any, args: any) =>
        prisma.customers.findUnique({
            where: { id: args.id },
        }),
    addresses: () => prisma.address.findMany(),
    address: (parent: any, args: any) =>
        prisma.address.findUnique({
            where: { id: args.id },
        }),
    // brands: () => prisma.brands.findMany(),
    // brand: (parent: any, args: any) =>
    //     prisma.brands.findUnique({
    //         where: { id: args.id },
    //     }),
};

export { Query };
