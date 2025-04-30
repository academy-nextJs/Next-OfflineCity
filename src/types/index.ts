import store from "@/redux/store";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Location = {
  id: string;
  area_name: string;
  lat: string;
  lng: string;
};
