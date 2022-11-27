import { Box, Container, Flex, IconButton, Image, Text } from "@chakra-ui/react"
import { User } from "../../interfaces/user.interface"

type Props = {
    border: 'black' | 'main'
    user: User
    goToPage: (id: string) => void
}

export const PeopleAroundCard = ({ goToPage, border, user }: Props) => {

    const handleGoClick = (id: string) => {
        goToPage(id)
    }

    return (
        <Container variant={'people_around_card'} borderColor={border} gap={5}>
            <Flex flexDir={'column'} alignItems={'center'} gap={5}>
                <Box w={24} h={24} backgroundSize={"cover"} backgroundImage={`url(assets/images/avatar_${user.id}.png)`} borderRadius={100} />
                <Text variant={'people_card_title'}>{user.firstName}{' '}{user.lastName}</Text>
                <Flex ml={5} flexDir={'column'} gap={5}>
                    <Flex align={'center'} flexDir={'row'}>
                        <Image src={'assets/location.png'} />
                        <Text variant={'people_card_position'}>
                            {user.office}
                        </Text>
                    </Flex>
                    <Flex align={'center'} flexDir={'row'}>
                        <Image src={'assets/position.png'} />
                        <Text variant={'people_card_position'}>
                            {user.position}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex justify={'flex-end'}>
                <IconButton
                    onClick={() => handleGoClick(user.id)}
                    borderRadius={100}
                    aria-label="arrow"
                    bg={'main'}
                    icon={
                        <Image src={'assets/arrow.png'} />} />
            </Flex>
        </Container>
    )
}