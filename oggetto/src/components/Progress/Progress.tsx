import { Box, Flex, Progress, Text } from "@chakra-ui/react"
import { useMemo } from "react"

type Props = {
    size: 'big'
    value: number
}

export const ProgressCustom = ({ size, value }: Props) => {
    const calcSize = useMemo(() => {
        switch (size) {
            case 'big':
                return 400
            default:
                return 300
        }
    }, [size])
    const color = '#ffdd00'

    return (
        <Box
        >
            <Progress
                borderRadius={"100%"}
                sx={{
                    div: {
                        borderRadius: 0,
                    },
                }}
                colorScheme={'white'}
                transform={'rotate(90deg)'}
                h={calcSize}
                w={calcSize}
                bgColor={color}
                hasStripe={false}
                value={100 - value}
            >
                <Flex transform={'rotate(270deg)'} top={0} left={0} position={'absolute'} w="100%" h="100%" alignItems={'center'} justify={'center'}>
                    <Box w={(calcSize * 0.7)} h={(calcSize * 0.7)} borderRadius={"100"} sx={{ borderRadius: '100% !important' }} top={0} right={0} bgColor={'black'} >
                        <Flex color={'white'} p={10} w={'100%'} h={'100%'} align={'flex-start'} justify={'center'} flexDir={'column'}>
                            <Text variant={`progress_title_${size}_pros`}>{`${100 - value}%`}</Text>
                            <Text variant={`progress_title_${size}`}>до уровня Юный падаван</Text>
                        </Flex>

                    </Box>
                </Flex>
            </Progress>
        </Box>
    )
}