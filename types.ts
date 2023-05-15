export interface IGame {
  id: number;
  title: string;
  worth: string;
  thumbnail: string;
  image: string;
  description: string;
  instructions: string;
  open_giveaway_url: string;
  published_date: string;
  type: string;
  platforms: string;
  end_date: string;
  users: number;
  status: string;
  gamerpower_url: string;
}

export interface IError {
  status: number;
  status_message: string;
}

export interface IGameNews {
  date: string;
  description: string;
  image: string;
  link: string;
  title: string;
}

export interface IPlatform {
  name: string;
  isActive: boolean;
}
