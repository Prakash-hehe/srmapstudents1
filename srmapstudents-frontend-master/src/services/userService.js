import http from "./httpService"

export function registerUser(user) {
    return http.post("auth/users/", {
        username: user.username,
        email: user.email,
        password:user.password
    })
}

export function LoginUser(user) {
    return http.post("auth/jwt/create/", {
        username: user.username,
        password:user.password,
    })
}