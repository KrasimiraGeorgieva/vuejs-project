import requester from '@/helpers/requester'

const authString = btoa(`${requester.appKey}:${requester.appSecret}`)

const saveSession = (userData) => {
    sessionStorage.setItem('authtoken', userData.authtoken)
    sessionStorage.setItem('username', userData.username)

    return userData;
}

export const authService = {
    data() {
        return {
            authtoken: sessionStorage.getItem('authtoken'),
            username: sessionStorage.getItem('username')
        }
    },
    computed: {
        isAuthenticated() {
            return this.authtoken !== null;
        }
    },
    created() {
        this.$root.$on('logged-in', authtoken => this.authtoken = authtoken)
        this.$root.$on('logged-out', () => this.authtoken = null)
    }
}

export const authenticate = {
    methods: {
        register(username, password) {
            return this.authenticate(`/user/${requester.appKey}`, username, password)
        },
        login(username,password) {
           return this.authenticate(`/user/${requester.appKey}/login`, username, password)
        },
        authenticate(url,username,password) {
            return this.$http.post(url, {
                username,
                password
           }).then(({data}) => saveSession({
            username: data.username,
            authtoken: data._kmd.authtoken
            }));
        },
        logout() {
            return this.$http.post(`/user/${requester.appKey}/_logout`)
        }
    },
    created() {
        this.$http.defaults.headers.post['Authorization'] = `Basic ${authString}`
    }
}