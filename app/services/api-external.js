import axios from 'axios'

//Consumindo dados duma outra API com o AXIOS
export const findaDataAPI = async () => {
  const response = await axios.get('http://localhost:3000/users')//O method(GET) e o caminho da API externa
  return response
}