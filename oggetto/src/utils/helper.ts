import { rankName } from '../content/RankRule.json'

export const calcNameRank = (value: number) => {
    const t = rankName.filter((item) => value <= item.max)
    return (t.length ? t[0].name : 'Да кто ты ?!')
}