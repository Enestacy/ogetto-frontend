import { Container, Spinner } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useMemo, useState } from "react"
import { Rank } from "../../interfaces/task.interface"
import { User } from "../../interfaces/user.interface"
import { getUser } from "../../services/api/baseRequests"
import { calcNameRank } from "../../utils/helper"
import { Navigation } from "../Navigation/Navigation"
import { HeaderUser } from "./HeaderUser"

export const Header = () => {
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    const defaultRunk = {
        name: 'string',
        max: 0,
        lobby_title: {
            hello: 'string',
            tasks: 'string',
            power: 'string',
        }
    }
    const [user, setUser] = useState<User | null>()
    const getData = async () => {
        const dataUser = await getUser(localStorage.getItem("id"))
        localStorage.setItem("user", dataUser)
        setUser(() => ({ ...user, ...JSON.parse(dataUser) }))
    }

    const rank: Rank = useMemo(() => {
        if (user) return calcNameRank(user.rating)
        else return defaultRunk
    }, [user])

    useEffect(() => {
        if (user && rank) {
            setUser(() => ({
                ...user,
                rank,
            }))
            setIsLoading(false)
        }
    }, [rank])

    useEffect(() => {
        getData()
    }, [])

    return (
        <Container variant={'header'} display={router.pathname === '/registration' ? 'none' : 'flex'}>
            {isLoading ?
                <Spinner /> :
                user && <HeaderUser user={user} rank={rank} />}
            <Navigation />
        </Container>
    )
}