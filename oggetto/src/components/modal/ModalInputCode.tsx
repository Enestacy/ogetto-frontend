import {
    Box,
    Button,
    Flex,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useToast,
} from "@chakra-ui/react";
import { User } from "../../interfaces/user.interface";
import { patchInputCode } from "../../services/api/dataServices";

export const ModalInputCode = ({ isOpen, onClose, task }: any) => {
    const user: User = JSON.parse(localStorage.getItem("user") || "");
    const toast = useToast();
    const handleOkClick = async () => {
        const body = {
            taskCode: task.code,
            userId: user.id,
            myRating: user.rating,
        };
        const res = await patchInputCode(JSON.stringify(body));
        const dataRes = JSON.parse(res);
        if (dataRes.status === 403) {
            toast({
                title: "ERROR",
                description: dataRes.message,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
            return;
        }
        toast({
            title: "Успешно",
            description: "Задание выполнено!",
            status: "success",
            duration: 9000,
            isClosable: true,
        });
    };

    return (
        <Box w={"auto"}>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW={"fit-content"}>
                    <ModalHeader>Введи уникальный код задания</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input border={"1px solid rgba(47, 41, 41, 1)"} />
                        <Flex alignItems={"center"}>
                            <Image src={"assets/help.png"} />
                            <Text ml={2}>Помогите! Где взять код?</Text>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={handleOkClick} variant="modal_ok">
                            ОК
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};
