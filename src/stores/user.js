import {defineStore} from "pinia";

export default defineStore('user', {
    state: () => ({
        user: null,
        isLoggedIn: false,
        // isRegistered: false,
    })

});