import types from '../actions/types';

const initialState = {
    messages: [],
    contacts: [],
    user: null,
};
class AppReducer {
    /**
     * Creates an instance of the reducer class
     * @return {AppReducer}
     */
    constructor() {
        this.state = initialState;
    }
    /**
     * Sets the state
     * @param {Object|null} state
     */
    setState(state) {
        if (state) {
            this.state = state;
        }
        return this;
    }
    /**
     * Returns the next state
     * @param  {Mixed} payload
     * @return {Object} The next state object
     */
    nextState(payload) {
        //all action types exist on this class ,so  we will spin through them
        //unitll we get our first match and trigger it if we dont find any match
        //we will return the initial state which is what the swith does!
        const { type } = payload;

        for (let method in types) {
            if (types[method] === type && this[method]) {
                //we return the default state if the method returns nothing
                return this[method](payload) || this.state;
            }
        }
        return this.state;
    }
    singInUser({ user }) {
        return { ...this.state, user: { ...user } };
    }
    updateUserData({ data }) {
        return { ...this.state, ...data };
    }
}

const reducer = new AppReducer();

export default (state, payload) => {
    return reducer.setState(state).nextState(payload);
};
