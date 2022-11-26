import { Box, Button, Container, Flex, Input, Spinner, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"

export const Registration = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const [isLoad, setIsLoad] = useState(false)
    const router = useRouter()

    const handleLoginChange = ({ target: { value } }: { target: { value: string } }) => {
        setLogin(value)
    }
    const handlePasswordChange = ({ target: { value } }: { target: { value: string } }) => {
        setPassword(value)
    }

    const checkLogin = () => {
        const t = () => {
            switch (login) {
                case 'name':
                    if (password === '123') return (true)
                    return (false)
                case 'admin':
                    if (password === '123') return (true)
                    return (false)
                default:
                    return (false);
            }
        }
        setTimeout(() => {
            setIsLoad(false)
            if (t()) router.push('/')
            if (!t()) {
                setIsError(true)
                setTimeout(() => setIsError(false), 3000)
            }
        }, 2000)
    }

    const handleSignInClick = async () => {
        setIsLoad(true)
        checkLogin()
    }



    return (
        <Container variant={'registration'}>
            <Flex flexDir={'column'} align={'center'} h={'100%'} justify={'center'}>
                {isError && <Text color={'red'}>Error</Text>}
                <Flex flexDir={'column'}>
                    <Text>Your login</Text>
                    <Input
                        value={login}
                        onChange={handleLoginChange}
                        placeholder="Enter login">
                    </Input>
                </Flex>
                <Flex flexDir={'column'}>
                    <Text>Your password</Text>
                    <Input
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter password">
                    </Input>
                </Flex>
                <Flex flexDir={'row'} justify={'space-between'} mt={10}>
                    <Button
                        disabled={isLoad}
                        onClick={handleSignInClick} w={'100%'} variant={'black'}>Sign in
                        {isLoad && <Box ml={3}>
                            <Spinner />
                        </Box>}
                    </Button>
                    <Button w={'100%'} variant={'signUp'}>sign Up</Button>
                </Flex>
            </Flex>
        </Container>
    )
}