import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogType = {
    name: string
    id: string
}
export type MessageType = {
    message: string
}

const Dialog = (props: DialogType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <Dialog name="Den" id="1"/>
                <Dialog name="Karina" id="2"/>
                <Dialog name="Marina" id="3"/>
                <Dialog name="Darina" id="4"/>

            </div>
            <div className={s.messages}>
                <Message message="YYYYY"/>
                <Message message="UUUUU"/>
                <Message message="OOOOO"/>
                <Message message="EEEEE"/>
            </div>
        </div>
    )
}