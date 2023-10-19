import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement('div', {
        id: 'heading',
        xyz: 'fjh'
    },
    [React.createElement('h1', {
        id: 'head',
        xyz: 'ejf'
    }, 'Hello Wolrd inside the h1!'), React.createElement('h1', {
        id: 'head',
        xyz: 'ejf'
    }, 'Hello Wolrd inside the h1 as child!')]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading)