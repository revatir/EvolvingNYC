import axios from 'axios';

export const FetchData = async () => {
  await axios.get('https://data.cityofnewyork.us/resource/ipu4-2q9a.json')
    .try(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
}