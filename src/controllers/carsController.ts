import { Request, Response } from 'express'

const CarsController = {

    getCars (req: Request, res: Response) {
        console.log("hola mundo")
        res.send("hello world")
    }
}

export default CarsController;