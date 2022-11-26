import { Container, Flex } from "@chakra-ui/react"
import { Navigation } from "../Navigation/Navigation"
import { HeaderUser } from "./HeaderUser"

export const Header = () => {
    return (
        <Container variant={'header'}>
            <HeaderUser />
            <Navigation />
        </Container>
    )
}