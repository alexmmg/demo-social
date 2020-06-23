import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'fcacb08a-0280-492f-a832-bfb7851b80ad'}
});


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getMyAccount() {
        return instance.get(`auth/me`);
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`);
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`, {});
    },
    getProfile(userId) {
        console.warn('Use profileAPI method instead');
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    },
};

export const loginAPI = {
    sendLogin(userId) {
        return instance.post(`profile/` + userId);
    }
};
