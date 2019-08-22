import requester from '@/helpers/requester'

const AuthToken = () => sessionStorage.getItem('authtoken');

export const carService = {
    data(){
        return{
            cars: []
        };
    },
    created() {
        this.$http.defaults.headers['Authorization'] = `Kinvey ${AuthToken()}`
        this.$http.get(`appdata/${requester.appKey}/cars`)
        .then(({data}) => this.cars = data)
    }
}