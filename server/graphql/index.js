import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./User/typedefs.js";
import { resolvers } from "./User/resolvers.js";

export async function createGraphqlServer(){
    const server = new ApolloServer({typeDefs,resolvers});
    await server.start();
    return server;
}
