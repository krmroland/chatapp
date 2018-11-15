import io from "socket.io-client";

const socket = io("http://localhost:9000/");

socket.on("connect", function() {
    console.log("A connection was made");
});

socket.on("disconnect", function() {
    console.log(" I was disconnected");
});

export default socket;
