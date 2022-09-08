import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import api from "../api/axios"
import UserCard from '../components/UserCard/UserCard'
import Loader from '../components/Loader'


const UsersScreen = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            const res = await api.post('/post_listing', {
                user_id: 92
            })
            const filteredUsers = res?.data?.data?.filter((i: any) => i.user_id === 100)
            setUsers(filteredUsers)
            setLoading(false)
        })()
    }, [])

    return (
        <>
            {loading ? <Loader /> :
                <FlatList
                    data={users}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({ item }) => <UserCard data={item} />}
                />}
        </>
    )
}

export default UsersScreen