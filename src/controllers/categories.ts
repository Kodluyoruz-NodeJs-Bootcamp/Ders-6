import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Category } from '../entity/Category';

export const createCategory = async (req: Request, res: Response) => {
    let category = new Category();
    category = { ...req.body };
    await Category.save(category);
    res.send(category);
};

export const getAllCategories = async (req: Request, res: Response) => {
    const categories = await Category.find();
    res.send(categories);
};

export const getAllCategoriesWithProducts = async (req: Request, res: Response) => {
    const categories = await Category.find({ relations: ["products"] });
    res.send(categories);
};
























// { relations: ["products"] }
