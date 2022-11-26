import { Box } from "@chakra-ui/react"
import { useState } from "react"
import { Page } from "../../interfaces/navigation.interface"
import { NavigationItem } from "./NavigationItem"

export const Navigation = () => {
    const [page, setPage] = useState<Page[]>([
        {
            name: 'Home',
            isActive: true,
            href: '/'
        },
        {
            name: 'People',
            isActive: false,
            href: '/people'
        },
        {
            name: 'Events',
            isActive: false,
            href: '/events'
        },
    ])

    const onPageClick = (indexCurrentPage: number) => {
        setPage((prev) => [
            ...prev.map((item, index) => {
                if (index === indexCurrentPage)
                    return {
                        ...item,
                        isActive: true,
                    };
                return {
                    ...item,
                    isActive: false,
                };
            }),
        ])
    }

    return (
        <Box>
            {page.map((item, index) =>
                <NavigationItem
                    key={item.href}
                    page={item}
                    index={index}
                    onPageClick={onPageClick}
                />
            )}
        </Box>
    )
}