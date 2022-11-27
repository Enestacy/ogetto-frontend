import { Container } from "@chakra-ui/react"
import { Tag as TypeTag } from "../../interfaces/task.interface"
import { User } from "../../interfaces/user.interface"
import { PeopleTag } from "./PeopleTag"

type Props = {
    tags: TypeTag[]
}

export const TagsContainer = ({ tags }: Props) => {
    const mydata: User = JSON.parse(localStorage.getItem("user") || '')

    return (
        <Container variant={'tags_container'}>
            {
                tags.map((item) => <PeopleTag isActive={mydata.Tags.find((myTag) => item.title === myTag.title) ? true : false} key={item.User_Tags.TagId} tag={item} />)
            }
        </Container>
    )
}