import React from "react";
import s from "./Post.module.css";

export type MessageType = {
    message: string
    likesCount: string
}
export const Post = (props: MessageType) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7yFvSwVvkIM85rtfgy-g2rKLixWlE6iUhgQ&usqp=CAU"
                alt=""/>
            {props.message}
            <div>
                <span>Like</span>
            </div>

        </div>
    )
}