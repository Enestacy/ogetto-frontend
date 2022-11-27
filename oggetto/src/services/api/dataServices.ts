import {get, patch,
} from './baseRequests'

export const getTags = () => get('tags')
export const getTasks = (id: string | string[] | undefined | null) => get(`random-tasks/${id}`)
export const getUsers = () => get('users')
export const patchAdviceUsers = (body: any) => patch('find-match', body)
export const patchInputCode = (body: any) => patch('mark-as-done', body)
