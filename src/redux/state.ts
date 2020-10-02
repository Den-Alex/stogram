type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
type ProfilePageType = {
    posts: Array<PostsType>
}
type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

export let state: StateType= {
    profilePage: {
        posts: [
            {id: 1, message: "You", likesCount: 2},
            {id: 2, message: "Eeee", likesCount: 7},
            {id: 3, message: "Youu", likesCount: 10},
            {id: 4, message: "Esss", likesCount: 13}
        ]
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: "Den"},
            {id: 2, name: "Karina"},
            {id: 3, name: "Marina"},
            {id: 4, name: "Darina"}
        ],
        messages: [
            {id: 1, message: "YYYYY"},
            {id: 2, message: "OOOOO"},
            {id: 3, message: "UUUUU"},
            {id: 4, message: "EEEEE"}
        ]
    },
    sidebar: {}
}

export let addPost = (postMessage: string) => {
    let newPost: PostsType = {
        id: 4,
        message: postMessage,
        likesCount: 1
    };
    state.profilePage.posts.push(newPost);
}

