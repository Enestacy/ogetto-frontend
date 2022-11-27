import { Container, Flex, Spinner, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { User } from "../../interfaces/user.interface"
import { patchAdviceUsers } from "../../services/api/dataServices"
import { AdviceCard } from "./AdviceCard"

type Props = {
    users: User[]
    goToPage: (id: string) => void
}

export const PeopleAdvice = ({ users, goToPage }: Props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [adviceUsers, setAdviceUsers] = useState<User[]>([])
    const mydata: User = JSON.parse(localStorage.getItem("user") || '')

    const patchAdviceUsersData = async () => {
        const body = {
            tags: mydata.Tags.map((item) => item.title),
            id: mydata.id
        }
        const data = await patchAdviceUsers(JSON.stringify(body))
        if (data.length > 0) setIsLoading(false)
        setAdviceUsers([JSON.parse(data)])

    }

    useEffect(() => {
        patchAdviceUsersData()
    }, [users])

    return (
        <Container variant={'people_advice'}>
            <Text variant={'lobby_title_hello'}>Это судьба</Text>
            <Text variant={'lobby_title_tasks'} fontWeight={'bold'}>Совпадение интересов - отличный повод завязать новые знакомства</Text>
            {(isLoading) ? <Spinner /> : <Flex mt={10} gap={20}>
                {adviceUsers.map((item) =>
                    <AdviceCard goToPage={goToPage} key={item.id} user={item} />)}
            </Flex>}
        </Container>
    )
}