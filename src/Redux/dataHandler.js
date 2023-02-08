import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = 'https://aviasales-test-api.kata.academy/search';
const searchUrl = 'https://aviasales-test-api.kata.academy/tickets?searchId=';

// prettier-ignore

export const fetchSearchId = createAsyncThunk('getSearchId', async () => {
  const response = await fetch(baseUrl).then((res) => res.json());
  return response;

});

// prettier-ignore
export const fetchTickets = createAsyncThunk(
    'getTickets',
    async(_, {getState, rejectWithValue, dispatch}) => {
        try{
        const response = await fetch(`${searchUrl}${getState().getSearchId.searchId}`)
        if(!response.ok) {
            dispatch(fetchTickets())
            throw new Error('Server Error, trying new fetch') 
        }


        const data = await response.json()
        console.log(data)
        // if(!data.stop){dispatch(fetchTickets())}     ==============    continious loading untill no data to load
        return data
    }catch(error){
        return rejectWithValue(error.message)
    }
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
        [fetchTickets.rejected]: (state, action) => {
            state.loading = false
            console.log(action.payload)
            //return dispatch(fetchTickets())
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
