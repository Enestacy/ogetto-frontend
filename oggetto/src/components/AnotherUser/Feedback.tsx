import { Box, Flex, Image, Text } from "@chakra-ui/react"

export const Feedback = () =>
(
    <Box position={'relative'} mt={10} bgColor={'rgba(217, 217, 217, 0.47)'}>
        <Text
            fontWeight={'bold'}
            fontSize={'md'}
            color={'gray'}
            top={-2}
            px={5}
            left={10}
            borderRadius={10}
            bgColor={'white'}
            position={'absolute'}
        >Отзывы коллег</Text>
        <Flex
            border={'3px solid'}
            borderColor={'gray'}
            borderRadius={7}
            borderStyle={'dashed'}
            p={5}
            h={'80'}
            justify={'center'}
            flexDir={'column'}
            align={'center'}
            cursor={'not-allowed'}
        >
            <Flex
                justify={'center'}
                flexDir={'column'}
                align={'center'}
                color={'#3D3D3D'}
                gap={5}
                maxW={'xl'}>
                <Image src={'assets/lock.png'} />
                <Text
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                >Этот блок находится на стадии разработки</Text>
                <Text
                >Не все и сразу, но не волнуйтесь, скоро мы все придумаем</Text>
            </Flex>
        </Flex>
    </Box>
)
