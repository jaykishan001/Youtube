import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";
;

const store = configureStore({
    reducer: {
        menu: appSlice,
        search: searchSlice,
        chat: liveChatSlice
    },
});

export default store;