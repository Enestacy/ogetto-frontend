import { Container, Spinner } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getUsers } from "../../services/api/dataServices"
import { PeopleAdvice } from "./PeopleAdvice"
import { PeopleAround } from "./PeopleAround"
import { PeopleAway } from "./PeopleAway"

export const PeopleContainer = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
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
        if (isLoading) getData()
    }, [])

    return (
        <Container variant={'people'}>
            {(isLoading && !users.length) ? <Spinner /> :
                <Container>
                    <PeopleAdvice goToPage={goToPage} users={users} />
                    <PeopleAround goToPage={goToPage} users={users} />
                    <PeopleAway goToPage={goToPage} users={users} />
                </Container>
            }
        </Container>
    )
}