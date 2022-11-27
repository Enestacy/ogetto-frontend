import { Box, Container, Flex, IconButton, Image, Text } from "@chakra-ui/react"
import { User } from "../../interfaces/user.interface"
import { TagsContainer } from "./TagsContainer"

type Props = {
    user: User
    goToPage: (id: string) => void
}

export const AdviceCard = ({ user, goToPage }: Props) => {
    const handleGoClick = (id: string) => {
        goToPage(id)
    }

    return (
        <Container variant={'people_advice_card'}>
            <Flex>
                <Box w={24} h={24} backgroundSize={"cover"} backgroundImage={`url(assets/images/avatar_${user.id}.png)`} borderRadius={100} />
                <Flex ml={5} flexDir={'column'} gap={5}>
                    <Text variant={'people_card_title'}>{user.firstName}{' '}{user.lastName}</Text>
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
            <TagsContainer tags={user.Tags} />
            <Flex justify={'flex-end'}>
                <IconButton
                    borderRadius={100}
                    aria-label="arrow"
                    bg={'main'}
                    onClick={() => handleGoClick(user.id)}
                    icon={
                        <Image src={'assets/arrow.png'} />} />
            </Flex>
        </Container>
    )
}