import { Container, Spinner } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { User } from "../../interfaces/user.interface"
import { getUsers } from "../../services/api/dataServices"
import { PeopleAdvice } from "./PeopleAdvice"
import { PeopleAround } from "./PeopleAround"
import { PeopleAway } from "./PeopleAway"

export const PeopleContainer = () => {
    const [users, setUsers] = useState<User[]>([])
    const [usersAround, setUsersAround] = useState<User[]>([])
    const [usersAway, setUsersAway] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const user: User = JSON.parse(localStorage.getItem("user") || '')
    const router = useRouter()

    const getData = async () => {
        const dataUsers = await getUsers()
        setUsers(JSON.parse(dataUsers))
        setIsLoading(false)
    }

    const goToPage = (id: string) => {
        router.push(`/${id}`)
    }

    useEffect(() => {
        setUsersAround(users.filter((item) => item.office === user.office))
        setUsersAway(users.filter((item) => item.office !== user.office))
    }, [users])

    useEffect(() => {
        if (isLoading) getData()
    }, [])

    return (
        <Container variant={'people'}>
            {(isLoading && !users.length) ? <Spinner /> :
                <Container>
                    <PeopleAdvice goToPage={goToPage} users={users} />
                    <PeopleAround goToPage={goToPage} users={usersAround} />
                    <PeopleAway goToPage={goToPage} users={usersAway} />
                </Container>
            }
        </Container>
    )
}