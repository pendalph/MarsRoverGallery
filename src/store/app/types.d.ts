export type TData = {
  photos: Array<TPhotos>;
};

export type TCamera = {
  id: string;
  name: string;
  rover_id: number;
  full_name: string;
};

export type TRover = {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
};

export type TPhotos = {
  id: string;
  sol: number;
  camera: TCamera;
  img_src: string;
  earth_date: string;
  rover: TRover;
};
