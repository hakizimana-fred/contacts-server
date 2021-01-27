const contacts = [
    {
        id: 'richard',
        name: 'Richard Kalehoff',
        handle: '@richardkalehoff',
        avatarURL: 'http://localhost:4000' + '/richard.jpg'
    },
    {
        id: 'karen',
        name: 'Karen Isgrigg',
        handle: '@karen_isgrigg',
        avatarURL: 'http://localhost:4000' + '/richard.jpg'
    },
    {
        id: 'tyler',
        name: 'Tyler McGinnis',
        handle: '@tylermcginnis',
        avatarURL: 'http://localhost:4000' + '/richard.jpg'
    }
]

export const resolvers = {
    Query: {
        contacts: () => contacts
    }
}
