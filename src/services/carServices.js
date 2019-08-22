import requester from '@/helpers/requester'

const AuthToken = () => sessionStorage.getItem('authtoken');

export const carService = {
    data(){
        return{
            cars: [],
            car: []
        };
    },
    methods: {
        getAllCars(){
        this.$http.defaults.headers['Authorization'] = `Kinvey ${AuthToken()}`
        return this.$http.get(`appdata/${requester.appKey}/cars?query={}&sort={"_kmd.ect": 1}`)
        .then(({data}) => this.cars = data)
        },
        getById(){
            this.$http.defaults.headers['Authorization'] = `Kinvey ${AuthToken()}`
            return this.$http.get(`appdata/${requester.appKey}/cars/` + this.$route.params.id)
            .then(({data}) => this.car = data)
        }

    }
}