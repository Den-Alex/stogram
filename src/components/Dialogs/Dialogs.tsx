import React from "react";
import s from "./Dialogs.module.css";
import { DialogImem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

let dialogs = [
    {id: 1, name: "Den"},
    {id: 2, name: "Karina"},
    {id: 3, name: "Marina"},
    {id: 4, name: "Darina"}
]

let dialogsElement = dialogs.map( d => <DialogImem name={d.name} id={d.id}/> )

let messages = [
    {id: 1, message: "YYYYY"},
    {id: 2, message: "OOOOO"},
    {id: 3, message: "UUUUU"},
    {id: 4, message: "EEEEE"}
]
let messagesElement = messages.map( m => <Message message={m.message} id={m.id}/> )

export const Dialogs = () => {
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