/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'

const initState = {
    "total_count": -1,
    "incomplete_results": false,
    "items": []
}

export const data = createSlice({
    name: 'usersData',
    initialState: initState,
    reducers: {
        addUsers(state, action) {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})
export const { addUsers } = data.actions





// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const FETCH_SEARCH = "https://api.github.com/search/";

// export const searchApi = createApi({
//   reducerPath: "searchReducer",
//   baseQuery: fetchBaseQuery({
//     baseUrl: FETCH_SEARCH,
//   }),
//   endpoints: (builder) => ({
//     getUsers: builder.query<any, { login: string; params: string }>({
//       query: (args) => {
//         const { login, params } = args;
//         return {
//           url: `/users?q=${login}&sort=repositories&order=${params}`,
//         };
//       },
//     }),
//   }),
// });

// export const { useGetUsersQuery } = searchApi;