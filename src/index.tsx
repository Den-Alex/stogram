import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {StateType, store, StoreType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {store.getState()} addPost = {store.addPost} updateNewPostText={store.updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
