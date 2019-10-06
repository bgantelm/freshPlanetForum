import * as _ from 'lodash'

export default {
    Query: {
        user: (parent, { id }, { Users, Forums }) => {
            const userById = Users.find(user => user.id === parseInt(id, 10))
            return {
              id: userById.id,
              name: userById.name,
              picture: userById.picture,
              forums: _.filter(Forums, forum => userById.forums.includes(forum.id)),
              forum: (forumId) => {
                const forumById = _.find(Forums, forum => {
                  return forum.id === parseInt(forumId.id, 10)
                })
            
                return {
                  id: forumById.id,
                  name: forumById.name,
                  users: forumById.users,
                  messages: forumById.messages.sort((a, b) => new Date(parseInt(b.sendingTime, 10) - new Date(parseInt(a.sendingTime, 10))))
                }
              }
            }
        }
    }
  }