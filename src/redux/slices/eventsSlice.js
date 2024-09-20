import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [
    {
      id: 1,
      year: 2023,
      title: "Dies Natalis ke 63 ITS",
      description: "Puncak Dies Natalis dan Penganugrahan Penghargaan.",
      image: "https://www.its.ac.id/diesnatalis/wp-content/uploads/sites/105/2023/11/Puncak-Dies-Natalis-1024x314.jpg",
    },
    {
      id: 2,
      year: 2022,
      title: "Dies Natalis ke 62 ITS",
      description: "Innovation for Indonesia.",
      image: "https://www.its.ac.id/diesnatalis/wp-content/uploads/sites/105/2022/08/Header-Web-Dies.png",
    },
    {
      id: 3,
      year: 2021,
      title: "Dies Natalis ke 61 ITS",
      description: "Koonser Letto.",
      image: "https://i.ytimg.com/vi/tT2j0s16UQQ/maxresdefault.jpg",
    },
    {
      id: 4,
      year: 2022,
      title: "Dies Natalis ke 61 ITS",
      description: "Lustrum XII - Technology for Prosperity.",
      image: "https://www.its.ac.id/wp-content/uploads/2020/09/Lustrum-XII-1024x520.png",
    },
  ],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.history.push(action.payload);
    },
    removeEvent: (state, action) => {
      state.history = state.history.filter(
        (event) => event.id !== action.payload
      );
    },
  },
});

export const { addEvent, removeEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
