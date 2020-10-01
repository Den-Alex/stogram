import React from "react";
import s from "./Mypost.module.css";
import {Post} from "./Post/Post";

let posts = [
    {id: 1, message: "You", likesCount: 2},
    {id: 2, message: "Eeee", likesCount: 7},
    {id: 3, message: "Youu", likesCount: 10},
    {id: 4, message: "Esss", likesCount: 13}
]

export const Mypost = () => {

    let postsElement = posts.map( p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    return (
        <div className={s.content}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}