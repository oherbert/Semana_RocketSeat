import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

class UserController{
    async create(request: Request, response: Response){
        const {name, email} = request.body;
        
        const usersRepo = getCustomRepository(UserRepository);

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

        return response.status(201).send(users);
    }
}

export { UserController };
