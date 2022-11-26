import { Container, Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { User } from "../../interfaces/user.interface"
import { AdviceCard } from "./AdviceCard"

type Props = {
    users: User[]
    goToPage: (id: string) => void
}

export const PeopleAdvice = ({ users, goToPage }: Props) => {
    const [filterUsers, setFilterUsers] = useState<User[]>([])

    useEffect(() => {
        setFilterUsers([users[0], users[1]])
    }, [users])

    return (
        <Container variant={'people_advice'}>
            <Text variant={'lobby_title_hello'}>Это судьба</Text>
            <Text variant={'lobby_title_tasks'} fontWeight={'bold'}>Совпадение интересов - отличный повод завязать новые знакомства</Text>
            <Flex mt={10} gap={20}>
                {filterUsers.map((item) =>
                    <AdviceCard goToPage={goToPage} key={item.id} user={item} />)}
            </Flex>
        </Container>
    )
}