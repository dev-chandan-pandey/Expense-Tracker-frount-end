import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for registering a user
export const registerUser = createAsyncThunk(
    'auth/registerUser', 
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/users', userData);
            if (response.data) {
                // Assume user is logged in right after registration
                return response.data;
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Async thunk for logging in a user
export const loginUser = createAsyncThunk(
    'auth/loginUser', 
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:3000/users?email=${credentials.email}`);
            const user = response.data[0];
            if (user && user.password === credentials.password) {
                return user; // Successful login
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (error) {
            return rejectWithValue('Invalid credentials');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status: null,
        error: null
    },
    reducers: {
        logoutUser(state) {
            state.user = null;
        }
    },
    extraReducers: {
        [registerUser.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [loginUser.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [registerUser.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
