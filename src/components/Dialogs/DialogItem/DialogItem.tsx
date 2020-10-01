import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

export type DialogType = {
    name: string
    id: number
}

export const DialogImem = (props: DialogType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
