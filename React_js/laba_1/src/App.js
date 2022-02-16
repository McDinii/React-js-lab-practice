import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Board from "./components/board";
import Header from "./components/head";
import Side from "./components/side";
import Task_1 from "./components/task_1";


function App() {

    return (<div >
            <Task_1/>
            <div className="main0">
                <h1 >Задание 3 </h1>

                <Header/>
                <Side/>
                <Board/>

                <Side/>
                <div id="d">
                <Header/></div>
            </div>
        </div>

    );

}

export default App;
