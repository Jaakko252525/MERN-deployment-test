

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'



const typeDefs = `
    type Todo{
        id:ID
        title: String!
        completed: Boolean
    }

    type Query{
        todos: [Todo]
        todo(id: String!): String
    }
    `
interface Todo {
    id: string,
    title: string,
    completed: boolean
}


const todos: Todo[] = [
    {
        id: '1',
        title: 'Python jatkokurssi 5op',
        completed: true
    },
    {
        id: '2',
        title: 'fullstack open 5op',
        completed: false
    }
]


//resolvers

const resolvers = {
    Query: {
        todos: () => {
            return todos
        },
        todo: (id:string) => {
            return 'this returns todos'
        }
    }
}


// server like in fs harkkatyo
const server = new ApolloServer({
    typeDefs,
    resolvers,
  }
  
  )
  
  //////
  
  // production or development
  const PORT = 4000
  
  
  startStandaloneServer(server, {
    listen: { port: PORT },
  }).then(({ url }: {url: string}) => {
    console.log(`Server ready at ${url}`)
  })

  
// server
/*
interface MyContext {
  token?: String;
}

const server = new ApolloServer<MyContext>({ typeDefs, resolvers });
async function ss() { const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({ token: req.headers.token }),
  listen: { port: 4000 },
})
    console.log('url:', url)
;}
console.log(`🚀  Server ready at`);*/