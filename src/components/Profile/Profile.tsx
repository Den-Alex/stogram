import React from "react";
import s from "./Profile.module.css";
import {Mypost} from "./Mypost/Mypost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

export type PostPropsType = {
    posts: Array<PostsType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}
export const Profile = (props: PostPropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Mypost posts={props.posts}
                    addPost={props.addPost}
                    newPostText={props.newPostText}
                    updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}