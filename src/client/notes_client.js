import axios from "axios";
import { SERVER_URL } from "./config";


export async function getAllNotes() {    
    
    ////  const url = SERVER_URL + "notes/cache_view"  // view cache
    const url = SERVER_URL + "notes/cache"       // manual cache
        
    try {
        const resJ = await axios.get(url)            
        // const resJ = res.json()
        console.assert(resJ.status === 200)
        return resJ.data
    } catch (error) {
        window.alert("Error!")
        console.log(error)
    }            
}


export async function createNote(body) {
    
    const url = SERVER_URL + "notes/create"

    const res = await axios.post(url, body)

    if (res.status !== 200) {
        alert("Error at creating notes. please try again latter")
        console.log(res);
        return false
    }
    return true
}