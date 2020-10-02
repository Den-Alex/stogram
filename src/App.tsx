import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppStateType = {
    state: StateType
    addPost: (postMessage: string) => void
}

function App(props: AppStateType) {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Route path="/dialogs" render={() => <Dialogs dialogs1={props.state.dialogPage}
                                                          messages1={props.state.dialogPage}/>}/>
            <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts}
                                                          addPost={props.addPost}/>}/>
        </div>
    );
}


export default App;
