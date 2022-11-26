import { Container, Flex } from "@chakra-ui/react"
import { useEffect, useMemo, useState } from "react"
import { Rank } from "../../interfaces/task.interface"
import { getUser } from "../../services/api/baseRequests"
import { calcNameRank } from "../../utils/helper"
import { Navigation } from "../Navigation/Navigation"
import { HeaderUser } from "./HeaderUser"

export const Header = () => {
    const [user, setUser] = useState({
        firstName: "Антон",
        lastName: "Смирнов",
        position: "frontend",
        rank: "Новая надежда",
        about: "лучший из лучших",
        office: "Таганрог ТЦ «Андреевский»",
        tags: ["юмор", "животные"],
        rating: 9
    })
    const getData = async () => {
        const dataUser = await getUser("59a73d80-6ce0-11ed-bbdc-97667bccac03")
        setUser(JSON.parse(dataUser))
    }

    const rank: Rank = useMemo(() => {
        return calcNameRank(user.rating)
    }, [user])

    useEffect(() => {
        getData()
    }, [])
    return (
        <Container variant={'header'}>
            <HeaderUser user={user} rank={rank} />
            <Navigation />
        </Container>
    )
}