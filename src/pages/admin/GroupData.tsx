import React,{useState} from "react";
import axios from 'axios';
import * as A from './Admin.styled';


interface AdminGroupData {
        name: string;
        isRecruit: boolean;
        profile: string;
        maxMember: number;
        leadar: number;
        createdAt: string;
        group_id: number;
}

interface AdminGroupProps {
    data?:AdminGroupData;
}


function GroupData({data}: AdminGroupProps) {
    const [deleted, setDeleted] = useState(false);

    async function handleDeleteGroup() {
        try{
            await axios.delete(`http://localhost:3001/api/v1/admin/groups/${data?.group_id}`);
            setDeleted(true);
        } catch (error) {
            throw error;
        }
    }
    
    
    
    
    
    if (!data){
        return null;
    }
    
    const {group_id, name, leadar, maxMember} = data;

    return (
        <tr>
        {data && (
            <td>{group_id}</td>
            )}
        {data && (    
            <td>{name}</td>
            )}
        {data && (
            <td>{leadar}</td>
            )}
        {data && (
            <td>{maxMember}</td>
            )}
        {data && (
            <td>
            <A.AdminButton>수정</A.AdminButton>
            <A.AdminButton onClick={handleDeleteGroup}>삭제</A.AdminButton>
            {deleted && <p>모임이 삭제되었습니다.</p>}
            </td>
            )}
        </tr>
    );
}

export default GroupData;