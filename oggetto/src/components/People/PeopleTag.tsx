import { Container } from "@chakra-ui/react"
import { Tag as TypeTag } from "../../interfaces/task.interface"

type Props = {
    tag: TypeTag
}

export const PeopleTag = ({ tag }: Props) => {
    return (<Container variant={'people_tag'}>
        {tag.title}
    </Container>)
}