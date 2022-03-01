import axios from 'axios'
import Token from './token'

const fetchGetSKU = async (payload) => {
    const config = {
        headers: {
            Authorization: Token
        }
    }
    const url = `https://rywe6a9co8.execute-api.ap-southeast-1.amazonaws.com/api/matching/sku?
                    skip=${payload.skip}
                    &limit=${payload.limit}
                    ${payload.searchQuery.code ? '&code=' + payload.searchQuery.code : ''}
                    ${payload.searchQuery.name ? '&name=' + payload.searchQuery.name : ''}
                    ${payload.searchQuery.unit ? '&unit=' + payload.searchQuery.unit : ''}
                    ${payload.searchQuery.desc ? '&description=' + payload.searchQuery.desc : ''}`
    
    try {
        const response = await axios.get(url, config)
        return response.data
    } catch (error) {
        throw error
    }
}

export default fetchGetSKU