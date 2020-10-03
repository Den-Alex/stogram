import React from "react";
import s from "./Mypost.module.css";
import {Post} from "./Post/Post";
import {PostPropsType} from "../Profile";



export const Mypost = (props: PostPropsType) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
            props.addPost();
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value);
        }
    }

    return (
        <div className={s.content}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}