import {Request, Response} from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController{
    async create(request: Request, response: Response){
        const {name, email} = request.body;
        
        const usersRepo = getRepository(User);

        const userExists = await usersRepo.findOne({
            email
        });

        if(userExists){
            return response.status(400).json({
                error: "User already exists!"
            })
        }

        const users = usersRepo.create({
            name,
            email
        })
        await usersRepo.save(users);

        return response.send(users);
    }
}

export { UserController };