import { gql } from 'apollo-server-express'

export const typeDefs = gql`

    type Contact{
       id: String!
       name: String!
       handle: String!
       avatarURL: String!
    }

    type Query{
       contacts: [Contact]
    }
`