import { Box, Container, Flex, Image, Link, Text } from "@chakra-ui/react"
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
                ><Image src={`assets/status_${user.status}.png`} /></Box>
                <Flex ml={5} flexDir={'column'} gap={5}>
                    <Text variant={'another_user_inform_title'}>{user?.firstName}{' '}{user?.lastName}{' '}{user?.surname}</Text>
                    <Flex justify={'space-between'}>
                        <Text variant={'another_user_inform_subtitle'}>{`${user?.position} и ${rank.name}`}</Text>
                        <Text variant={'another_user_inform_subtitle'}>{user?.date_of_birth}</Text>
                    </Flex>
                    {user?.Tags && <TagsContainer tags={user?.Tags} />}
                </Flex>
            </Flex>
            <Flex mt={10} flexDir={'column'} gap={6}>
                <Text variant={'another_user_inform_title'}>Обо мне: </Text>
                <Text fontWeight={'bold'}>{user.about}</Text>
            </Flex>
            <Flex mt={6} alignItems={'center'}>
                <Image src={'assets/telegram.png'} />
                <Link ml={3} href={`https://t.me/${user.tg}`}>{user.tg}</Link>
            </Flex>
        </Container>
    )
}