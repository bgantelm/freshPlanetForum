import uuidv4 from 'uuid/v4'

export default {
    Mutation: {
        createMessage: (_, { text, forumId, userId }, { Users, Forums }) => {
            const message = {
              id: uuidv4(),
              text,
              sendingTime: (Date.now()/1000).toString(),
              sender: Users.find(user => {
                if (user.id === parseInt(userId, 10)) {
                  return {
                    id: user.id,
                    name: user.name,
                    picture: user.picture
                  }
                }
              })
            }
            Forums.find(forum => {
              if (forum.id === parseInt(forumId, 10)) {
                forum.messages.push(message)
                return forum
              }
            })

            return message
          }
    }
}