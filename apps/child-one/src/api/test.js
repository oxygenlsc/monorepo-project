import { get } from '@lisc/utils'
const URL = {
    getAllFields: 'api/v1/meta/user_fields',
}
export const apiGetAllFields = async () => get({ url: URL.getAllFields, params: {} })

