import { getRepository, Between, Equal, MoreThan, LessThan } from 'typeorm';
import { Request, Response } from 'express';
import { Product } from '../entity/Product';
var moment = require('moment');

export const createProducts = async (req: Request, res: Response) => {
    let product = new Product();
    product = { ...req.body };
    await Product.save(product);
    res.send(product);
};

export const getAllProducts = async (req: Request, res: Response) => {
    const products = await Product.find();
    res.send(products);
};

export const filterProducts = async (req: Request, res: Response) => {
    let { min, max } = req.query
    const products = await Product.find({
        count: Between(min, max)
    }
    );
    res.send(products);
};

export const getProductsByCategoryId = async (req: Request, res: Response) => {
    let { categoryId } = req.query
    const products = await Product.find({ where: { category: { id: categoryId } } });
    res.send(products);
};

export const getProductById = async (req: Request, res: Response) => {
    let { id } = req.params
    try {
        const products = await Product.findOneOrFail(id);
        res.send(products);
    }
    catch (e) {
        res.send("Muhittin")
    }
};

export const getProductsWithQueryBuilder = async (req: Request, res: Response) => {
    let { id } = req.params
    console.log("CategoryId : " + id)
    const products = await Product.createQueryBuilder("product")
        .where("product.categoryId = :id", { id: id }).getMany();
    res.send(products);
};

export const updateProduct = async (req: Request, res: Response) => {
    let { id } = req.params
    let { name } = req.body
    const products = await Product.update(id, { name: name })
    res.send(products);
};

export const deleteProduct = async (req: Request, res: Response) => {
    let { id } = req.params
    const products = await Product.delete(id);
    res.send(products);
};


export const getOldProducts = async (req: Request, res: Response) => {
    let date = moment().format('YYYY-MM-DD')
    const products = await Product.find({ skid: LessThan(date) });
    res.send(products);
};



















