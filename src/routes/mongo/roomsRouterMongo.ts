import { Router } from "express";
import { allRooms } from "../../controllers/mongo/roomsControllerMongo";


const routerMongo = Router();

routerMongo.get('/', async (req, res) => {
    const rooms = await allRooms();
    res.json(rooms);
})

export default routerMongo;