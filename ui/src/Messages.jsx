import React from "react";
import socket from "./socket";
export default class Messages extends React.Component {
    componentDidMount() {
        socket.on("message", message => {
            this.setState(({ messages }) => ({
                messages: messages.concat(message)
            }));
        });

        socket.on("typing", message => {
            this.setState(() => ({ typing: true }));
            setTimeout(() => this.setState(() => ({ typing: false })), 2000);
        });

        fetch("/messages")
            .then(response => response.json())
            .then(data => this.setState({ messages: data }));
    }
    constructor(props) {
        super(props);
        this.state = { messages: [], isTyping: false };
        this.updateMessage = this.updateMessage.bind(this);
    }
    updateMessage(e) {
        socket.emit("message", e.target.value);
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.messages.map(message => (
                        <li key={message._id}>{message.body}</li>
                    ))}
                </ul>
                {this.state.typing && <span>Roland is typing</span>}
            </div>
        );
    }
}
