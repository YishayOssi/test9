import fs from "node:fs/promises"


export async function ReadUsers(){
    try{
    const json = await fs.readFile("data/users.json", "utf-8")
    const data = await JSON.parse(json)
    return data}

    catch (err){
        console.log("Reading from file failed!");
    }
}




export function CheckUser(user, list_of_users){
    for(let i = 0; i<list_of_users.length; i++){
        if(list_of_users[i].username === user.username){
            return false}
    }    
return true   
}




export async function SaveUser(user, list_of_users){
    try{
    list_of_users.push(user)
    
    const newlist_of_users = JSON.stringify(list_of_users)
    await fs.writeFile("data/users.json", newlist_of_users)
    return true}

    catch (err){
        console.log("User entry failed!")
        return false
    }
}






export async function ReadEvents(){
    try{
    const json = await fs.readFile("data/events.json", "utf-8")
    const data = await JSON.parse(json)
    return data}

    catch (err){
        console.log("Reading from file failed!");
    }
}






export async function SaveEvent(event, list_of_events){
    try{
    list_of_events.push(event)
    
    const newlist_of_events = JSON.stringify(list_of_events)
    await fs.writeFile("data/events.json", newlist_of_events)
    return true}

    catch (err){
        console.log("event entry failed!")
        return false
    }
}




export async function SaveTicket(ticket, list_of_events){
    try{
    list_of_events.push(ticket)
    
    const newlist_of_events = JSON.stringify(list_of_events)
    await fs.writeFile("data/events.json", newlist_of_events)
    return true}

    catch (err){
        console.log("event entry failed!")
        return false
    }
}



ReadReceipts

export async function ReadReceipts(){
    try{
    const json = await fs.readFile("data/receipts.json", "utf-8")
    const data = await JSON.parse(json)
    return data}

    catch (err){
        console.log("Reading from file failed!");
    }
}

SaveReceipts

export async function SaveReceipts(ticket, list_of_events){
    try{
    list_of_events.push(ticket)
    
    const newlist_of_events = JSON.stringify(list_of_events)
    await fs.writeFile("data/receipts.json", newlist_of_events)
    return true}

    catch (err){
        console.log("event entry failed!")
        return false
    }
}