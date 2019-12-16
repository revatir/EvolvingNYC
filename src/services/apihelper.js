import axios from 'axios';

// export const FetchData = async () => {
//   await axios.get('https://data.cityofnewyork.us/resource/ipu4-2q9a.json')
//     .try(res => {
//       console.log(res)
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }

export const FetchData = async (jobType, borough, year) => {
  let response = await axios.get(`https://data.cityofnewyork.us/resource/ipu4-2q9a.json?permit_status=ISSUED&&filing_status=INITIAL&&job_type=${jobType}&&borough=${borough}&&$where=issuance_date >= '${year}-01-01' AND issuance_date < '${year}-01-31'`)
  console.log(response.data)
  return response.data
}