import express from "express";
import { CheckUserInList } from "../utils/utils.js";
import { ReadUsers, ReadEvents, SaveEvent } from "../utils/allFile.js";

export const routerCreator = express.Router();

// create Event
routerCreator.post("/events", async (req, res) => {
    const eventName = req.body.eventName 
    const ticketsForSale = req.body.ticketsForSale
    const username = req.body.username
    const password = req.body.password


    const event = {"eventName": eventName , "ticketsForSale": ticketsForSale , "username": username , "password": password}
    if (typeof eventName === "string" && typeof ticketsForSale === "number" && typeof username === "string" && typeof password === "string"){
        const users = await ReadUsers()
        const chack_user_in_list = CheckUserInList(event, users)
        if(chack_user_in_list){
        const data = await ReadEvents()
        const new_event = {"eventName": eventName , "ticketsForSale": ticketsForSale , "username": username}
        await SaveEvent(new_event, data);
        res.status(201).json({ msg: "The event was created successfully...." })}
      



        
    }
    
    


    
})