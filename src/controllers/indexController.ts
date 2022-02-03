import { Request, Response } from 'express'

const indexController = {

    index (req: Request, res: Response) {
        res.send("Welcome");
    }
}

export default indexController;