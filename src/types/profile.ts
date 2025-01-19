export interface Profile {
  id: string;
  name: string;
  photo: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    coordinates: [number, number];
  };
  contact: {
    email: string;
    phone: string;
  };
  interests: string[];
}