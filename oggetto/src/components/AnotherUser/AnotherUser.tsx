import { Container, Divider, Flex, Text } from "@chakra-ui/react"
import { User } from "../../interfaces/user.interface"
import { AcceptTask } from "./AcceptTask"
import { AnotherUserInform } from "./AnotherUserInform"
import { CurrentProject } from "./CurrentProject"
import { Feedback } from "./Feedback"

type Props = {
    user: User
}

export const AnotherUser = ({ user }: Props) => {
    return (
        <Flex flexDir={'column'} w={'100%'}>
            <Container variant={'another_user'}>
                <AnotherUserInform user={user} />
                <Divider orientation='vertical' />
                <Flex flexDir={'column'}>
                    <CurrentProject project={user.current_project} />
                    <Feedback />
                </Flex>
            </Container>
            <AcceptTask />
        </Flex>
    )
}