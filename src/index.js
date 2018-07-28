import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    name: "Ryan",
    luckyNumber: luckyNumber(),
}


ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);

function luckyNumber(){
    return Math.floor(Math.random()*1000) + 1;
}

function greeting(userObj){
    const container = (<div>
        <h1>Hello {userObj.name}</h1>
        <h2 className="text-muted">Your lucky number: {userObj.luckyNumber}</h2>
    </div>)
    return container;
}



