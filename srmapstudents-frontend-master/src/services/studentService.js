import http from "./httpService"

export function getStudent(studentId) {
    return http.get(`srmapstudents/students/${studentId}/`)
}

export function getCodechef(studentId) {
    return http.get(`srmapstudents/student-details/codechef-details/${studentId}/`)
}

export function getCodeforces(studentId) {
    return http.get(`srmapstudents/student-details/codeforces-details/${studentId}/`)
}

export function getGithub(studentId) {
    return http.get(`srmapstudents/student-details/github-details/${studentId}/`)
}
