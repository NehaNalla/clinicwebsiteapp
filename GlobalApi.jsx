
import axios from "axios";

const BASE_URL="http://192.168.29.58:1337/api"

const API_KEY="67de781f82ced73b999b2356bb85e5fa45fb7d0d2614e97b677729ac5b3b139e59c8dd4470a87f25884beda9bfd92da271cc93146a27d9e6fcc125def31550a02b2a15cbcdcd6025719ff28101949a8733d725bac0c1ef07d96393ece96996914210050f0355bc7d8d84b343ca421c0aa4d864ef1efc854860f76a98496311f7"

const AxioInstance=axios.create({
    baseURL:BASE_URL,
    headers:{
        'Authorization':"Bearer" +API_KEY
    }
})

const getSlider=()=>AxioInstance.get("/sliders?populate=*");

const getCategories=()=>AxioInstance.get("/categories?populate=*");

const getPremiumHospitals=()=>AxioInstance.get("/hospitals?filters[Premium]=true&populate=*")

const getHospitalsByCategory=(category)=>AxioInstance.get("hospitals?filters[category][name][$in]="+category+"&populate=*")

//const getHospitalsByCategory = () =>
    //AxioInstance.get(
      //"hospitals?populate=*"
    //);
const createAppointment=(data)=>AxioInstance.post(
    "/appointments",data
)
export default{
    getSlider,
    getCategories,
    getPremiumHospitals,
    getHospitalsByCategory,
    createAppointment
}
