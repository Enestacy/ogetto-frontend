import { Button } from "@chakra-ui/react"
import Link from "next/link"
import { Page } from "../../interfaces/navigation.interface"

type Props = {
    page: Page
    index: number
    onPageClick: (index: number) => void
}

export const NavigationItem = ({ page, index, onPageClick }: Props) => {
    return (
        <Link href={page.href} onClick={() => onPageClick(index)}>
            <Button variant={page.isActive ? 'page_active' : 'page'}>
                {page.name}
            </Button>
        </Link>
    )
}