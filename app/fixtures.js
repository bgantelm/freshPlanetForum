export let Users = [
    {
        id: 1,
        name: 'John',
        picture: 'urlPicture',
        forums: [11, 12]
    },
    {
        id: 2,
        name: 'Marc',
        picture: 'urlPicture2',
        forums: [11, 12]
    },
    {
        id: 3,
        name: 'Bruno',
        picture: 'urlPicture3',
        forums: [13, 14]
    },
    {
        id: 4,
        name: 'Esther',
        picture: 'urlPicture4',
        forums: [13, 14]
    },
    {
        id: 5,
        name: 'Julien',
        picture: 'urlPicture5',
        forums: [15]
    }
]


export let Forums = [
    {
        id: 11,
        name: 'Forum1',
        users: [
            {
                id: 1,
                name: 'John',
                picture: 'urlPicture'
            },
            {
                id: 2,
                name: 'Marc',
                picture: 'urlPicture2'
            }
        ],
        messages: [
            {
                id: 111,
                text: 'message2',
                sendingTime: '1570303918',
                sender: {
                    id: 1,
                    name: 'John',
                    picture: 'urlPicture'
                }
            },
            {
                id: 112,
                text: 'message3',
                sendingTime: '1570303919',
                sender: {
                    id: 2,
                    name: 'Marc',
                    picture: 'urlPicture2'
                }
            },
            {
                id: 113,
                text: 'message1',
                sendingTime: '1570303917',
                sender: {
                    id: 1,
                    name: 'John',
                    picture: 'urlPicture'
                }
            }
        ]
    },
    {
        id: 12,
        name: 'Forum2',
        users: [
            {
                id: 1,
                name: 'John',
                picture: 'urlPicture'
            },
            {
                id: 2,
                name: 'Marc',
                picture: 'urlPicture2'
            }
        ],
        messages: [
            {
                id: 111,
                text: 'message3',
                sendingTime: '1570303918',
                sender: {
                    id: 1,
                    name: 'John',
                    picture: 'urlPicture'
                }
            },
            {
                id: 112,
                text: 'message2',
                sendingTime: '1570303919',
                sender: {
                    id: 2,
                    name: 'Marc',
                    picture: 'urlPicture2'
                }
            },
            {
                id: 113,
                text: 'message',
                sendingTime: '1570303917',
                sender: {
                    id: 1,
                    name: 'John',
                    picture: 'urlPicture'
                }
            }
        ]
    },
    {
        id: 13,
        name: 'Forum3',
        users: [
            {
                id: 3,
                name: 'Bruno',
                picture: 'urlPicture3'
            },
            {
                id: 4,
                name: 'Esther',
                picture: 'urlPicture4'
            }
        ],
        messages: [
            {
                id: 111,
                text: 'message',
                sendingTime: '1570303918',
                sender: {
                    id: 3,
                    name: 'Bruno',
                    picture: 'urlPicture3'
                }
            },
            {
                id: 112,
                text: 'message2',
                sendingTime: '1570303919',
                sender: {
                    id: 4,
                    name: 'Esther',
                    picture: 'urlPicture4'
                }
            },
            {
                id: 113,
                text: 'message3',
                sendingTime: '1570303917',
                sender: {
                    id: 3,
                    name: 'Bruno',
                    picture: 'urlPicture3'
                }
            }
        ]
    },
    {
        id: 14,
        name: 'Forum4',
        users: [
            {
                id: 3,
                name: 'Bruno',
                picture: 'urlPicture3'
            },
            {
                id: 4,
                name: 'Esther',
                picture: 'urlPicture4'
            }
        ],
        messages: [
            {
                id: 111,
                text: 'message',
                sendingTime: '1570303918',
                sender: {
                    id: 3,
                    name: 'Bruno',
                    picture: 'urlPicture3'
                }
            },
            {
                id: 112,
                text: 'message2',
                sendingTime: '1570303919',
                sender: {
                    id: 4,
                    name: 'Esther',
                    picture: 'urlPicture4'
                }
            },
            {
                id: 113,
                text: 'message3',
                sendingTime: '1570303917',
                sender: {
                    id: 3,
                    name: 'Bruno',
                    picture: 'urlPicture3'
                }
            }
        ]
    },
    {
        id: 15,
        name: 'Forum5',
        users: [
            {
                id: 5,
                name: 'Julien',
                picture: 'urlPicture5'
            }
        ],
        messages: [
            {
                id: 111,
                text: 'ok Im alone',
                sendingTime: '1570303918',
                sender: {
                    id: 5,
                    name: 'Julien',
                    picture: 'urlPicture5'
                }
            },
            {
                id: 112,
                text: 'Hey',
                sendingTime: '1570303919',
                sender: {
                    id: 5,
                    name: 'Julien',
                    picture: 'urlPicture5'
                }
            }
        ]
    }
]