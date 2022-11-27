import { Box, Text } from "@chakra-ui/react"

export const CurrentProject = ({ project }: { project: string }) => {
    return (<Box position={'relative'}>
        <Text
            fontWeight={'bold'}
            fontSize={'md'}
            top={-2}
            px={5}
            left={10}
            bgColor={'white'}
            position={'absolute'}
        >Текущий проект</Text>
        <Box maxW={'xl'}
            borderRadius={7}
            p={5}
            border={'3px solid'}
        >
            <Text variant={'another_user_inform_title'} fontSize={'md'}>{project}</Text>
            <Text>Информация о проекте ляляляял Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</Text>
        </Box>
    </Box>)
}