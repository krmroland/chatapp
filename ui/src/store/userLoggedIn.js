import { signInUser } from './actions';
import socket from './socket';

export default (dispatch, googleUser) => {
    const profile = googleUser.getBasicProfile();

    const user = {
        id: profile.getId(),
        name: profile.getName(),
        image: profile.getImageUrl(),
        email: profile.getEmail(),
    };
    console.log('A user was authenticated ');

    dispatch(signInUser(user));
    socket.emit('user-was-authenticated', user);
};
