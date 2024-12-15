import http from './httpService'

export function registerProfile(profile) {
    return http.post('srmapstudents/students/', {
        id: profile.id,
        first_name: profile.first_name,
        last_name: profile.last_name,
        branch: profile.branch,
        section: profile.section,
        github_username: profile.github_username,
        codechef_username: profile.codechef_username,
        codeforces_username: profile.codeforces_username,
        linkedin_username: profile.linkedin_username,
        leetcode_username: profile.leetcode_username,
        hackerrank_username: profile.hackerrank_username,
        user_id:profile.user_id,
    })
}

export function updateProfile(profile) {
    return http.post(`srmapstudents/students/${profile.id}/`, {
        first_name: profile.first_name,
        last_name: profile.last_name,
        branch: profile.branch,
        section: profile.section,
        github_username: profile.github_username,
        codechef_username: profile.codechef_username,
        codeforces_username: profile.codeforces_username,
        linkedin_username: profile.linkedin_username,
        leetcode_username: profile.leetcode_username,
        hackerrank_username: profile.hackerrank_username,
    })
}

export function getProfile() {
    const jwt = localStorage.getItem("jwt")
    return http.get("srmapstudents/student/me/", {
        method: "get",
        headers: {
            "Authorization":`JWT ${jwt}`
        }
    })
}