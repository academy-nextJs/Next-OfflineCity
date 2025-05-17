import { store } from "@/redux/store";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Location = {
  id: string;
  area_name: string;
  lat: string;
  lng: string;
};

export interface HouseProps {
  id: string;
  title: string;
  address: string;
  photos: string[];
  rate: string;
  price: string;
  tags: string[];
  capacity: string;
  location: {
    lat: number;
    lng: number;
  };
  categories: {
    id: number;
    name: string;
  };
  bathrooms: number;
  parking: number;
  rooms: number;
  yard_type: string;
  num_comments: number;
  transaction_type: string;
  sellerId: string;
  sellerName: string;
  caption: string;
}


export interface CommentsProps {
  id: number;
  house_id:number;
  user_id:number;
  title:string;
  caption:string;
  rating:number;
  created_at:number;
  parent_comment_id:number;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    fullName:string;
    profilePicture: null;
};
parent_comment: {
  id: number;
  house_id:number;
  user_id: number;
  title: string;
  caption: string;
  rating: number;
  created_at: number;
  parent_comment_id: null;
  user: {
      id: number;
      firstName: string;
      lastName: string;
      fullName: string;
      profilePicture: null;
  }
}

}