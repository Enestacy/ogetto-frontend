import {get, patch,
} from './baseRequests'

export const getTags = () => get('tags')
export const getTasks = () => get('tasks')
export const getUsers = () => get('users')
export const patchAdviceUsers = (body: any) => patch('find-match', body)
