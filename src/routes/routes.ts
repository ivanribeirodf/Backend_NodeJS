import { Router, Request, Response } from 'express';

const router = Router();

router.get('/teste', (rep: Request, res: Response) => {
    return res.json({nome:"teste"})
    // throw new Error('Erro ao fazer essa requiseção!')
})

export { router }