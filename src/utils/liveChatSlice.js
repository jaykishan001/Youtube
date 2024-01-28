import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        appendMessage: (state, action) => {
            state.messages.splice(15, 1)
            state.messages.push(action.payload);
        }
    }
})

export const { appendMessage } = liveChatSlice.actions
export default liveChatSlice.reducer;