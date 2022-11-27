import { Box, Button, Flex, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"

export const ModalInputCode = ({ isOpen, onClose, task }: any) => {

    const handleOkClick = () => {
        console.log('task = ', task)
    }

    return (
        <Box w={'auto'}
        >
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW={'fit-content'}>
                    <ModalHeader>Введи уникальный код задания</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            border={'1px solid rgba(47, 41, 41, 1)'}
                        />
                        <Flex alignItems={'center'}>
                            <Image src={'assets/help.png'} />
                            <Text ml={2}>Помогите! Где взять код?</Text>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={handleOkClick} variant='modal_ok'>ОК</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>

    )
}