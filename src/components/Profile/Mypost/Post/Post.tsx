import React from "react";
import s from "./Post.module.css";

export type PostType = {
    message: string
    likesCount: number
    id: number
}
export const Post = (props: PostType) => {
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