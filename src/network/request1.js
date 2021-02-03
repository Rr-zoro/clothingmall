import originAxios from 'axios'

export default function axios(option) {
  return new Promise((resolve, reject) => {
    const intance = new originAxios.create({
      baseURL: '/url',
      timeout: 5000
    })
    intance(option).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}