import io from 'socket.io-client';

import store from './';
import { updateUserData } from './actions';
const socket = io('http://localhost:9000');

socket.on('authenticated-user-data', data => {
    store.dispatch(updateUserData(data));
});

socket.emit('fetch-users');
export default socket;
