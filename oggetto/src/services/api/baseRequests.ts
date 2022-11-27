//'http://172.20.10.2:3000'
const baseUrl =  "http://192.168.43.40:3000"

export const get = (path: string) => (
  fetch(`${baseUrl}/${path}`, {
    method: 'GET',
  })
    .then((res) => res.text())
)

export const getUser = (id: string | null) => (
  fetch(`${baseUrl}/user/${id}`, {
    method: 'GET',
  })
    .then((res) => res.text())
)

export const patch = (path: string, body: any) => (
  fetch(`${baseUrl}/${path}`, {
    headers: {
      "Content-Type" :  "application/json; charset=utf-8",
    },
    method: 'PATCH',
    body,
  })
    .then((res) => res.text())
)