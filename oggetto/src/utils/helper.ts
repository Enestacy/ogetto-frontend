import { rankName } from "../content/RankRule.json";

export const calcNameRank = (value: number) => {
  const unknow = {
    name: "Да кто ты ?!",
    max: 0,
    lobby_title: {
      hello: "Эй ты, у тебя ошибочный ранг",
      tasks: "Тебе здесь не рады",
      power: "ERRORRR ERROORRR",
    },
  };
  const t = rankName.filter((item) => value <= item.max);
  return t.length ? t[0] : unknow;
};
