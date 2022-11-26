import { Tag } from "./task.interface";

export type User = {
  id: string
  Tags: Tag[]
  about: string
  current_project: string
  date_of_birth: string
  firstName: string
  lastName: string
  position: string
  rank?: string
  grade: string
  office: string
  tags: string[]
  rating: number
  status: string
  surname: string | null
  tg: string
}
