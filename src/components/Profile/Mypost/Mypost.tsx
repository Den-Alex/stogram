import React from "react";
import s from "./Mypost.module.css";
import {Post} from "./Post/Post";

export const Mypost = () => {
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
                <Post message="You" likesCount="2"/>
                <Post message="Den" likesCount="10"/>
            </div>
        </div>
    )
}