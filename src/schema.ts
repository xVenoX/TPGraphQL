import { buildSchema } from "graphql";

const schema = buildSchema(`

  type Owner {
    id: ID!
    name: String!
  }
  
   type Pet {
    id: ID!
    name: String!
    age: Int!
    pictureUri: String
    ownerId: ID!
    owner: Owner 
  }

  type Query {
        getPets: [Pet]
        getPet(id: ID!): Pet
        getOwners: [Owner]
        getOwner(id: ID!): Owner
    }

  type Mutation {
        createPet(name: String!, age: Int!, pictureUri: String, ownerId: String!): Pet!
        updatePet(id: ID!, name: String, age: Int, pictureUri: String, ownerId: String): Pet!
        deletePet(id: ID!): ID!
        createOwner(name: String!): Owner!
    }
`);

export default schema;