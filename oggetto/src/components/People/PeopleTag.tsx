import { Container } from "@chakra-ui/react"
import { Tag as TypeTag } from "../../interfaces/task.interface"

type Props = {
    tag: TypeTag
    isActive: boolean
}

export const PeopleTag = ({ tag, isActive }: Props) =>
(<Container variant={isActive ? 'people_tag_active' : 'people_tag'}>
    {tag.title}
</Container>)
