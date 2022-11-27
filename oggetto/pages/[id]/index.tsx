
import { Box, Container, Flex, IconButton, Image, Spinner, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AnotherUser } from '../../src/components/AnotherUser/AnotherUser'
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
        getData()
    }, [])

    return (
        <>
            {
                isLoading ? <Spinner /> :
                    user && <AnotherUser user={user} />
            }
        </>
    )
}