export const ROOMS: TRooms = [
  {
    id: 1,
    name: "green up",
    max_users: 32,
  },
];

export type TRoom = {
  id: number;
  name: string;
  max_users: number;
};

export type TRooms = TRoom[];

const data = {
  ROOMS,
};

export default data;
