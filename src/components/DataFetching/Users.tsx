import {useQuery} from '@tanstack/react-query'

const fetchUsers = async () => {
    const response = await fetch('https://reqres.in/api/users?page=2')
    return response.json()

}

const Users = () => {
    const { isLoading, error, data, status, isError, isSuccess, } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers, 
    })

    console.log( usersQuery )
// display loading state
if(isLoading) {
    return <h1>Loading../</h1>
}
    return(
        <div>Users</div>
    )

}

export default Users
