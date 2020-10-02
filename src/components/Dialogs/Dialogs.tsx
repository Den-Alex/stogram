import React from "react";
import s from "./Dialogs.module.css";
import {DialogImem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import { DialogPageType } from "../../redux/state";

type Dialogs1Type = {
    dialogs1: DialogPageType
    messages1: DialogPageType
}
export const Dialogs = (props: Dialogs1Type) => {

    let dialogsElement = props.dialogs1.dialogs.map(d => <DialogImem name={d.name} id={d.id}/>)
    let messagesElement = props.messages1.messages.map(m => <Message message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}