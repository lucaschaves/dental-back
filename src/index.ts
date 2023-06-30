import { ApolloServer } from "apollo-server";
import { context } from "./db";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const runServer = () => {
    const server = new ApolloServer({
        resolvers,
        typeDefs,
        context,
    });

    const port = 4000;
    server.listen(port, () => {
        console.log(
            `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
        );
    });
};

runServer();
