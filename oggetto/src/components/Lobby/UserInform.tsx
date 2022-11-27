import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from "@chakra-ui/react";
import { User } from "../../interfaces/user.interface";
import { AboutMe } from "./AboutMe";
import { LobbyTags } from "./LobbyTags";
import { StatusMe } from "./StatusMe";

export const UserInform = ({ user }: { user: User }) => {
    return (
        <Box maxW={"4xl"} pl={10} m={0}>
            <Accordion allowMultiple>
                <AccordionItem border={0}>
                    <h2>
                        <AccordionButton
                            h={16}
                            borderRadius={16}
                            _hover={{
                                bgColor: "rgba(255, 221, 0, 0.38)",
                            }}
                        >
                            <AccordionIcon />
                            <Box flex="1" textAlign="left">
                                Мои данные
                            </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <StatusMe status={user.status} />
                        <AboutMe about={user.about} />
                        {user?.Tags && <LobbyTags userTags={user.Tags} />}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
};
