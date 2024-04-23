import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch transactions
export const fetchTransactions = createAsyncThunk(
    'transactions/fetchTransactions', 
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3000/transactions');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Add a new transaction
export const addTransaction = createAsyncThunk(
    'transactions/addTransaction', 
    async (transaction, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/transactions', transaction);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Delete a transaction
export const deleteTransaction = createAsyncThunk(
    'transactions/deleteTransaction', 
    async (transactionId, { rejectWithValue }) => {
        try {
            await axios.delete(`http://localhost:3000/transactions/${transactionId}`);
            return transactionId;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const transactionSlice = createSlice({
    name: 'transactions',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {
        // Optional reducers for other transaction operations
    },
    extraReducers: {
        [fetchTransactions.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [addTransaction.fulfilled]: (state, action) => {
            state.items.push(action.payload);
        },
        [deleteTransaction.fulfilled]: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        [fetchTransactions.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [addTransaction.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [deleteTransaction.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
});

export default transactionSlice.reducer;
