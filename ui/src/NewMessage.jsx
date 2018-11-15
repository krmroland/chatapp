import React from "react";
import socket from "./socket";
export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.state = {
            value: ""
        };
    }
    sendMessage(e) {
        e.preventDefault();
        socket.emit("message", this.state.value);
    }
    updateValue(e) {
        this.setState({ value: e.target.value });
        socket.emit("typing", this.state.value);
    }
    render() {
        return (
            <form onSubmit={this.sendMessage}>
                <label>Create a messages</label>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    onChange={this.updateValue}
                />
                <button>Send Message</button>
            </form>
        );
    }
}
