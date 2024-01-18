import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const fetchUser = async (userId) => {
    /*
    const response = await fetch(`https://reqres.in/api/users/${userId}`)
    if(!response.ok){
        throw new Error('User not found')
    }
    return response.json()
    */
   const response = await axios.get(`https://reqres.in/api/users/${userId}`)
   return response.data

}


const Users = () => {
    const userId:number = 1
    const { isLoading, error, data, status, isError, isSuccess, } = useQuery({
        queryKey: ['users', { userId }],
        queryFn: () => fetchUser(userId), 
    })

    console.log( data )

    // display loading state
    if(isLoading) {
        return <h1>Loading..</h1>
    }
        return(
            <div>Users</div>
        )

    if(isError) { return <h1>Something happened {error.message}</h1>}

}
 
export default Users
