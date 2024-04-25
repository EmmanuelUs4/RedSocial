export const URL_API = "http://localhost:3000/"
export const points = {
    users: `${URL_API}users`,
    posts: `${URL_API}posts`,
    comments: `${URL_API}comments`,
    user: (email, password)=> {
        return `${URL_API}users?email=${email}&password=${password}`
    }
}