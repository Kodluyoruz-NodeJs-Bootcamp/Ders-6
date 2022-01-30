import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Employee } from '../entity/Employee';

export const createEmployee = async (req: Request, res: Response) => {
    let employee = new Employee();
    employee = { ...req.body };
    await Employee.save(employee);
    res.send(employee);
};

export const getAllEmployees = async (req: Request, res: Response) => {
    const employees = await Employee.find();
    res.send(employees);
};

export const getEmployeeById = async (req: Request, res: Response) => {
    const player = await Employee.find({
        id: Number(req.params.id)
    });

    res.send(player);
};

export const updateEmployeeById = async (req: Request, res: Response) => {
    const { name, surname } = req.body;

    await Employee.update(Number(req.params.id), {
        name,
        surname
    });

    const updatedEmployee = await Employee.find({
        id: Number(req.params.id)
    });

    res.send(updatedEmployee);
};

export const deleteEmployeeById = async (req: Request, res: Response) => {
    const employee = await Employee.find({
        id: Number(req.params.id)
    });

    await Employee.remove(employee);

    res.send(`Employee id ${req.params.id} has been deleted.`);
};
