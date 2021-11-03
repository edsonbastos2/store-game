import axios from 'axios'

export const api = axios.create({
    baseURL:'http://localhost:3000'
})

export const getCep = async (cep) => {
   return await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}