import { Button, Flex, Input } from "@chakra-ui/react"

export const Filter = () => {
    const typeFilter = [
        'фильтр 1',
        'фильтр 2',
        'филтьтр 3'
    ]

    return (
        <Flex flexDir={'row'} align={'center'} justify={'space-between'} w={'100%'}>
            <Flex>
                {
                    typeFilter.map((item) => <Button key={item}>{item}</Button>)
                }
            </Flex>
            <Input
                m={0}
                h={10}
                w={60}
                bgColor={'main'}
                _placeholder={{ color: 'white' }}
                placeholder="Search name"></Input>
        </Flex>
    )
}