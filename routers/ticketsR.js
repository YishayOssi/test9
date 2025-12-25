import express from "express";
import { ReadUsers, ReadEvents, ReadReceipts} from "../utils/allFile.js";
import { CheckUserInList, TicketAvailability } from "../utils/utils.js";

export const routerTickets = express.Router();

routerTickets.post("/tickets/buy", async (req, res) => {
    const username = req.body.username 
    const password = req.body.password
    const eventName = req.body.eventName
    const quantity = req.body.quantity


    const tickets = {"username": username , "password": password , "eventName": eventName , "quantity": quantity}
    if (typeof username === "string" && typeof password === "string" && typeof eventName === "string" && typeof quantity === "number"){
        const users = await ReadUsers()
        const chack_user_in_list = CheckUserInList(tickets, users)
        if(chack_user_in_list){
        const data = await ReadEvents() 
        const ticket_availability = TicketAvailability(tickets, data)
        if(!ticket_availability){
          res.status(400).json({ msg: "There are not enough tickets available!!!" })}  
        else{
            const data = await ReadReceipts()
             const newtickets = {"username": username , "eventName": eventName , "quantity": quantity}
            await SaveReceipts(new_event, data);
                    res.status(201).json({ msg: "The event was created successfully...." })}
        }
        }
        }
    



)