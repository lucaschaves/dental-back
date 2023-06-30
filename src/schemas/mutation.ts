import { prisma } from "../db";

const Mutation = {
    createCustomer: (parent: any, args: any) => {
        const {
            email,
            password,
            name,
            treatment,
            phone,
            cpf,
            birth_date,
            cro,
        } = args.data;
        return prisma.customers.create({
            data: {
                email,
                password,
                name,
                treatment,
                phone,
                cpf,
                birth_date,
                cro,
            },
        });
    },
    createAddress: (parent: any, args: any) => {
        const { address, number, zip_code, name, contact_number, customers } =
            args.data;
        return prisma.address.create({
            data: {
                address,
                number,
                zip_code,
                name,
                contact_number,
                customers: customers && {
                    create: [customers],
                },
            },
        });
    },
    // createBrand: (parent: any, args: any) =>
    //     prisma.brands.create({
    //         data: args,
    //     }),
};

export { Mutation };
