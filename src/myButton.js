import React from "react";
import bind from 'bind-decorator';

export class MyButton extends React.Component {

    constructor(props) {
        super(props);
        this.field = 1;
    }

    @bind
    onClick() {
        alert(this.field);
    }

    render() {
        return (
            <button onClick={this.onClick}>Click me!</button>
        );
    }
}
