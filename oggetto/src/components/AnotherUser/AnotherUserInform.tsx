import { Box, Container, Flex, Image, Text } from "@chakra-ui/react"
import { useMemo } from "react"
import { Rank } from "../../interfaces/task.interface"
import { User } from "../../interfaces/user.interface"
import { calcNameRank } from "../../utils/helper"
import { TagsContainer } from "../People/TagsContainer"

type Props = {
    user: User
}

export const AnotherUserInform = ({ user }: Props) => {
    const defaultRunk = {
        name: 'string',
        max: 0,
        lobby_title: {
            hello: 'string',
            tasks: 'string',
            power: 'string',
        }
    }

    const rank: Rank = useMemo(() => {
        if (user) return calcNameRank(user.rating)
        else return defaultRunk
    }, [user])

    return (
        <Container variant='another_user_inform'>
            <Flex flexDir={'row'}>
                <Box w={32} h={32}
                    backgroundSize={"cover"}
                    backgroundImage={`url(assets/images/avatar_${user.id}.png)`}
                    borderRadius={100}
                    display={'flex'}
                    alignItems={'flex-end'}
                    justifyContent={'flex-end'}
                ><Image src={'assets/status_active.png'} /></Box>
                <Flex ml={5} flexDir={'column'} gap={5}>
                    <Text variant={'another_user_inform_title'}>{user?.firstName}{' '}{user?.lastName}{' '}{user?.surname}</Text>
                    <Text variant={'another_user_inform_subtitle'}>{`${user?.position} и ${rank.name}`}</Text>
                    {user?.Tags && <TagsContainer tags={user?.Tags} />}
                </Flex>
            </Flex>
            <Flex mt={10} flexDir={'column'} gap={6}>
                <Text variant={'another_user_inform_title'}>Обо мне: </Text>
                <Text ml={8} fontWeight={'bold'}>{user.about}</Text>
            </Flex>
        </Container>
    )
}