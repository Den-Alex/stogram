import React from "react";
import s from "./ProfileInfo.module.css";


export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://how-to-drink.ru/wp-content/uploads/2018/09/Screenshot_144.jpg"
                     alt=""/>
            </div>
            <div className={s.ava}>
                ava
            </div>
        </div>
    )
}