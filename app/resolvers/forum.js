import uuidv4 from 'uuid/v4'

export default {
    Query: {
        forums: (parent, _, { Forums }) =>  Forums.map(forum => ({ id: forum.id, name: forum.name }))
    },
    Mutation: {
        createForum: (_, { name, userId }, { Users, Forums }) => {
            const forum = {
              id: uuidv4(),
              name,
              users: [Users.find(user =>  user.id === parseInt(userId, 10))],
            }
      
            Forums.push(forum)
            return forum
          },
          joinForum: (_, { forumId, userId }, { Users, Forums }) => {
            return Forums.find(forum => {
              if (forum.id === parseInt(forumId, 10)) {
                forum.users.push(Users.find(user => {
                  if (user.id === parseInt(userId, 10)) {
                    return {
                      id: user.id,
                      name: user.name,
                      picture: user.picture
                    }
                  }
                }))
                return forum
              }
            })
          }
    }
}