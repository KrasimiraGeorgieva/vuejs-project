import requester from '@/helpers/requester'

const loginUser = user => {
    sessionStorage.setItem('username', user.username);
    sessionStorage.setItem('authtoken', user.authtoken);
}

export const authService = {
    computed: {
        isAuth() { 
            return sessionStorage.getItem('authtoken') !== null;
        }
    }
}

export const registerUser = {
    methods: {
        register(username, password) {
            const authString = btoa(`${requester.appKey}:${requester.appSecret}`)

            this.$http.defaults.headers.post['Authorization'] = `Basic ${authString}`
            return this.$http.post(`/user/${requester.appKey}`, {
                username,
                password
            }).then(({data}) => loginUser({
                username: data.username,
                authtoken: data._kmd.authtoken
            }));
        }
    }
}