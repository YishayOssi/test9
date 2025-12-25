export function Auth(req, res){
    try{
        res.json({ok: true})
    }
    catch (err){
        res.status(401).send("server not defind...")
    }
}


export function CheckUserInList(obj, list_of_users){
    for(let i = 0; i<list_of_users.length; i++){
        if(list_of_users[i].username === obj.username && list_of_users[i].password === obj.password){
            return true}
    }    
return false   
}






export function TicketAvailability(tickets ,list_of_events){
     for(let i = 0; i<list_of_events.length; i++){
        if(list_of_events[i].eventName === tickets.eventName){
            const event = list_of_events[i]
            if(event.ticketsForSale < tickets.quantity){
                return false}
            
        }
     }

return true
}