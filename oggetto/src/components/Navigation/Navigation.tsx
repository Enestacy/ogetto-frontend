import { Box, Flex } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Page } from "../../interfaces/navigation.interface"
import { NavigationItem } from "./NavigationItem"

export const Navigation = () => {
    const router = useRouter()
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
        {
            name: 'Log out',
            isActive: false,
            href: '/registration'
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

    useEffect(() => {
        setPage((prev) => (
            prev.map((item) => ({
                ...item,
                isActive: item.href === router.asPath
            }))
        ))
    }, [])

    return (
        <Flex align={'center'}>
            {page.map((item, index) =>
                <NavigationItem
                    key={item.href}
                    page={item}
                    index={index}
                    onPageClick={onPageClick}
                />
            )}
        </Flex>
    )
}