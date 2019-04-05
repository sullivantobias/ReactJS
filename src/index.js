import React from 'react';
import ReactDOM from 'react-dom';
import {Game} from "./TicTacToe/TicTacToe";
import {Introduction} from "./Introduction/introduction";

ReactDOM.render(<div><Game/> <Introduction/></div>, document.getElementById("root"));