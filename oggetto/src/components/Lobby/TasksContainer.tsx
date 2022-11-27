import { Flex } from "@chakra-ui/react"
import { Task as TypeTask } from "../../interfaces/task.interface"
import { Task } from "./Task"
import { useEffect, useState } from "react"
import { getTasks } from "../../services/api/dataServices"
import { useRouter } from "next/router"

export const TasksContainer = () => {
    const [tasks, setTasks] = useState<TypeTask[]>([])
    const router = useRouter()
    const [isMyTask, setIsMyTask] = useState(router.query.id ? false : true)

    const getData = async () => {
        const dataTasks = await getTasks(router.query.id || localStorage.getItem("id"))
        const t = JSON.parse(dataTasks)
        setTasks(t.Tasks)
    }

    useEffect(() => {
        setIsMyTask(router.query.id ? false : true)
        getData()
    }, [])

    return (
        <>
            <Flex gap={5} mt={5}
            >
                {tasks.length && tasks.map((item) =>
                    <>
                        <Task key={item.code} task={item} isDone={item.User_Tasks.isDone} isMyTask={isMyTask} />
                    </>)}
            </Flex>
        </>

    )
}