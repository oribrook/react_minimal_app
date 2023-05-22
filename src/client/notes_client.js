import axios from "axios";
import { SERVER_URL } from "./config";


export async function getAllNotes() {

    ///////////////////////////////////////////////////////////////////
    ////  running with cache:
    ////  const url = SERVER_URL + "notes/cache_view"  // view cache
    ////  const url = SERVER_URL + "notes/cache"       // manual cache
    ///////////////////////////////////////////////////////////////////
    
    const url = SERVER_URL + "notes"             // no cache    
        
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


export async function getNotesPagination(pageNum, pageSize) {
    const url = `${SERVER_URL}notes_pagination?page_num=${pageNum}&page_size=${pageSize}`
    
    try {
        const resJ = await axios.get(url)        
        console.assert(resJ.status === 200)        
        return resJ.data
    } catch (error) {
        window.alert("Error!")
        console.log(error)
    }
}