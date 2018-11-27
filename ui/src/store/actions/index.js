import types from './types';

export const signInUser = user => ({
    type: types['singInUser'],
    user,
});

export const updateUserData = data => ({
    type: types['updateUserData'],
    data,
});
