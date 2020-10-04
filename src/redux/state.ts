

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
    newPostText: string
}
type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: ( observer: () => void ) => void
    getState: () => StateType

}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "You", likesCount: 2},
                {id: 2, message: "Eeee", likesCount: 7},
                {id: 3, message: "Youu", likesCount: 10},
                {id: 4, message: "Esss", likesCount: 13}
            ],
            newPostText: "Den"
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
    },
    getState() {
      return this._state;
    },
    _callSubscriber()  {

    },
    addPost() {
        const newPost: PostsType = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 1
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}




