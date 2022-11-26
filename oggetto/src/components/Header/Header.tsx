import { Container, Flex } from "@chakra-ui/react"
import { Navigation } from "../Navigation/Navigation"

export const Header = () => {
    return (
        <Container variant={'header'}>
            <Flex>Юзер</Flex>
            <Navigation />
        </Container>
    )
}