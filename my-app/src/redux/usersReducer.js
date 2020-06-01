const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {
            id: '1',
            fullName: "Dmitry",
            followed: true,
            photoUrl: 'https://www.shareicon.net/data/512x512/2016/08/04/806683_man_512x512.png',
            status: 'I"m a boss',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: "2",
            fullName: "Sasha",
            followed: false,
            photoUrl: 'https://www.shareicon.net/data/512x512/2016/08/04/806683_man_512x512.png',
            status: 'I"m a boss too',
            location: {
                city: 'Moscow',
                country: 'Russia'
            }
        },
        {
            id: "3",
            fullName: "Milan",
            followed: true,
            photoUrl: 'https://www.shareicon.net/data/512x512/2016/08/04/806683_man_512x512.png',
            status: 'I"m a real boss',
            location: {
                city: 'Khmelnitsky',
                country: 'Ukraine'
            }
        },
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
};

export let followAC = (userId) => ({type: FOLLOW, userId});
export let unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export let setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;
