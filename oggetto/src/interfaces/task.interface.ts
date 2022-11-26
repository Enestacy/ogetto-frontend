export type Task = {
  id: string
  title: string
  description: string
  point: number
  code: string
  createdAt: string
  Tag: {
    title: string
  };
  done?: boolean
};

export type Rank = {
  name: string
  max: number
  lobby_title: {
    hello: string
    tasks: string
    power: string
  };
};
