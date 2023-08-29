import axios from "axios";
import { SERVER_URL } from "./config";


export async function getAllNotes() {

    const url = SERVER_URL + "notes"
        
    try {
        const resJ = await axios.get(url)                    
        console.assert(resJ.status === 200)
        return resJ.data
    } catch (error) {
        window.alert("Error!")
        console.log(error)
    }            
}


export async function getNotesPagination(pageNum, pageSize) {    
    const url = SERVER_URL + `/notes-auth/?page_num=${pageNum}&page_size=${pageSize}`
    
    const token = localStorage.getItem("token")
    const headers = {
        authorization: `Token ${token}`
    }

    try {
        const resJ = await axios.get(url, {headers})        
        console.assert(resJ.status === 200)        
        return resJ.data
    } catch (error) {
        window.alert("Error!")
        console.log(error)
    }
}

export async function editNote(newTitle, newContent, newStatus, noteId) {
    const url = SERVER_URL + `/notes-auth/` + noteId + "/"
    
    const body = {
        title: newTitle,
        content: newContent,
        status: newStatus,
    }

    const token = localStorage.getItem("token")
    const headers = {
        authorization: `Token ${token}`
    }
    
    try {
        const resJ = await axios.put(url, body, {headers})        
        console.log(resJ);
        console.assert(resJ.status === 200)        
        return resJ.data
    } catch (error) {
        window.alert("Error!")
        console.log(error)
    }
}