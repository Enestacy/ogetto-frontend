import { Button, Container, Flex, Text } from "@chakra-ui/react"
import { User } from "../../interfaces/user.interface"
import { Filter } from "./Filter"
import { PeopleAroundCard } from "./PeopleAroundCard"

type Props = {
    users: User[]
    goToPage: (id: string) => void
}

export const PeopleAway = ({ users, goToPage }: Props) => {
    return (
        <Container variant={'people_around'}>
            <Text variant={'lobby_title_hello'}>Коллеги подальше</Text>
            <Filter />
            <Flex gap={16} flexWrap={'wrap'} justify={'center'} align={'center'} w={'100%'}>
                {users.map((item) => <PeopleAroundCard goToPage={goToPage} border={'black'} key={item.id} user={item} />)}
            </Flex>
            <Button mt={10} variant={'yellow_little'}>Посмотреть еще</Button>
        </Container>
    )
}