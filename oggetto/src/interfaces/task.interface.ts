export type Task = {
  id: string
  title: string
  description: string
  point: number
  code: string
  createdAt: string
  Tag: {
    title: string
  }
  done?: boolean
}
