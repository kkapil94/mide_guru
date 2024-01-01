import gql from "graphql-tag"

export const typeDefs = gql`
    type User{
        id:ID
        name:String!
        phone:Int!
        gender:Gender!
        how_did_you_hear_about_this:Source
        city:City
        state:State
    }
    enum Gender{
        Male
        Female
        Other
    }
    enum Source{
        LinkedIn
        Friends
        Job_Portals
    }
    enum City{
        Mumbai
        Pune
        Ahmedabad
    }
    enum State{
        Gujarat
        Maharashtra
        Karnataka
    }
    input userInput{
        name:String!
        phone:Int!
        gender:Gender
        how_did_you_hear_about_this:Source
        city:City
        state:State
    }
    type Query{
        getUser(id:ID):User
        getUsers:[User]
    }
    type Mutation{
        createUser(input:userInput):User
        deleteUser(id:ID!):User
    }
`