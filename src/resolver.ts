type Contacts = {
    id: string
    name: string
    handle: string
    avatarURL: string
}

const contacts: Contacts[] = [
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
    },

    Mutation: {
        removeContact: (parent: any, args: any) => {
            return contacts.filter(c => c.id !== args.id)
        },


        addContact: (parent: any, args: any) => {
            const newContact: { id: string, name: string, handle: string, avatarURL: string } = {
                id: args.id,
                name: args.name,
                handle: args.handle,
                avatarURL: args.avatarURL
            }

            contacts.push(newContact)
            return contacts
        }

    }

}
