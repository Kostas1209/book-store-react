import { getUserInfo } from "../services/UserCabinetService"
import React from "react"

interface UserCabinetProps{
    accessToken: string
}


export const UserCabinetComponent: React.FC<UserCabinetProps> = ({accessToken})=>
{
    const state =
    {
        data: []
    }
    getUserInfo(accessToken)
    .then(response => response.json())
    .then(data => state.data = data)
    .catch(console.log)

    return (
        <div>
            <p>{state.data}</p>
        </div>
    )
}