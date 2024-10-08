// import AuthContext from "../contexts/authContext"
// import { useContext } from "react"

const requester = async (method, {url, values, accessToken}) => {
    // let { accessToken } = useContext(AuthContext)
    let options = {}
    // console.log(data)

    if (values) {
        options.body = JSON.stringify(values)
        options.headers = {
            'Content-Type': 'application/json'
        }

    }
    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken
        };
    }

    let response = await fetch(url, { method, ...options })
    // console.log(response)
    if (response.status === 204) {
        return {};
    }

    let result = await response.json()
    // console.log(result.email)
    if (!response.ok) {
        throw result;
    }

    return result
}



export const get = requester.bind(null, 'GET')
export const post = requester.bind(null, 'POST')
export const put = requester.bind(null, 'PUT')
export const remove = requester.bind(null, 'DELETE')
