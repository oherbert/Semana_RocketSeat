import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveyRepository } from "../repositories/SurveyRepository";

class SurveyController{
    async create(request:Request, response:Response ){
        const {title, description} = request.body;

        const surveyRepo = getCustomRepository(SurveyRepository);

        const survey = surveyRepo.create({
            title,
            description
        });
        
        await surveyRepo.save(survey);

        return response.status(201).json(survey);
    }

    async getAll(request:Request, response:Response) {
        const surveyRepo = getCustomRepository(SurveyRepository);
        
        const getAll = await surveyRepo.find();

        return response.status(200).json(getAll);
    }

}

export { SurveyController };
