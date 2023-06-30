import { Mutation } from "./mutation";
import { Query } from "./query";
import { Address, Customers } from "./resolver";
import { typeDefs } from "./typesDefs";

const resolvers = {
    Customers,
    Address,
    // Brands,
    Query,
    Mutation,
};

export { resolvers, typeDefs };
