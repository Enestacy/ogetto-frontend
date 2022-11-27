
import { Box, Container, Flex, IconButton, Image, Spinner, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { TagsContainer } from '../../src/components/People/TagsContainer'
import { User } from '../../src/interfaces/user.interface'
import { getUser } from '../../src/services/api/baseRequests'

export default function HomeUser() {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState<User | null>()
    const router = useRouter()
    const id = router.query.id as string

    const getData = async () => {
        const dataUser = await getUser(id)
        setUser(JSON.parse(dataUser))
        setIsLoading(false)
    }

    useEffect(() => {
        if (isLoading) getData()
    }, [])

    return (
        <>
            {
                isLoading ? <Spinner /> :
                    <Container variant={'people_advice_card'}>
                        <Flex>
                            <Box w={24} h={24} backgroundSize={"cover"} backgroundImage={'url(assets/images/avatar_1.png)'} borderRadius={100} />
                            <Flex ml={5} flexDir={'column'} gap={5}>
                                <Text variant={'people_card_title'}>{user?.firstName}{' '}{user?.lastName}</Text>
                                <Flex align={'center'} flexDir={'row'}>
                                    <Image src={'assets/location.png'} />
                                    <Text variant={'people_card_position'}>
                                        {user?.office}
                                    </Text>
                                </Flex>
                                <Flex align={'center'} flexDir={'row'}>
                                    <Image src={'assets/position.png'} />
                                    <Text variant={'people_card_position'}>
                                        {user?.position}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        {user?.Tags && <TagsContainer tags={user?.Tags} />}
                    </Container>
            }
        </>
    )
}