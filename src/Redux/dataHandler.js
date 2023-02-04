import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = 'https://aviasales-test-api.kata.academy/search';
const a = 'https://aviasales-test-api.kata.academy/tickets?searchId=';

// prettier-ignore

export const fetchSearchId = createAsyncThunk('getSearchId', async () => {
  const response = await fetch(baseUrl).then((res) => res.json());
  return response;

});

// prettier-ignore
export const fetchTickets = createAsyncThunk(
    'getTickets',
    async(_, {getState}) => {
        const response = await fetch(`${a}${getState().getSearchId.searchId}`).then((res) => res.json())
        console.log(response)
        return response
    }
)
// prettier-ignore
export const fetchTicketsSlice = createSlice(({
    name:'tickets',
    initialState: {
        tickets: null,
        loading: false,
        stop: false,
    },
    extraReducers: {
        [fetchTickets.pending]: (state) => {
            state.loading = true
        },
        [fetchTickets.fulfilled]: (state, action) => {
            state.loading = false;
            state.tickets = action.payload.tickets
            state.stop = action.payload.stop
        },
        [fetchTickets.rejected]: (state) => {
            state.loading = false
        }
    }
}))
// prettier-ignore
const fetchSearchIdSlice = createSlice(({
    name: 'searchId',
    initialState: {
        searchId: null,
        loading: false,
    },
    extraReducers: {
        [fetchSearchId.pending]: (state) => {
            state.loading = true
        },
        [fetchSearchId.fulfilled]: (state, action) => {
            state.loading = false;
            state.searchId = action.payload.searchId
        },
        [fetchSearchId.rejected]: (state) => {
            state.loading = false
        }
    }

}))

export default fetchSearchIdSlice.reducer;
