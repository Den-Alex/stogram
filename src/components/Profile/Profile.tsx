import React from "react";
import s from "./Profile.module.css";
import {Mypost} from "./Mypost/Mypost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Mypost/>
        </div>
    )
}