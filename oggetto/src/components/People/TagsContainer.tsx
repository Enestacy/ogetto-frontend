import { Container } from "@chakra-ui/react"
import { Tag as TypeTag } from "../../interfaces/task.interface"
import { PeopleTag } from "./PeopleTag"

type Props = {
    tags: TypeTag[]
}

export const TagsContainer = ({ tags }: Props) => {
    return (
        <Container variant={'tags_container'}>
            {
                tags.map((item) => <PeopleTag key={item.User_Tags.TagId} tag={item} />)
            }
        </Container>
    )
}