import { Request } from "express";
import multer, { StorageEngine } from "multer";

// for local storage upload -------uncomment for use----------

/* 
const storage: StorageEngine = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
        cb(null, 'public');
    },
    filename: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
        cb(null, Date.now()+file.originalname);
    }
})
*/

// for local cloud upload -------uncomment for use----------

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
//-------IF USE FILE SIZE LIMITITATIONS---------
/*    
    limits: {
        fileSize: 1000000
    },
*/
//-------IF USE FILE FILTER---------
/*
    fileFilter: (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
        if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only jpg, jpeg, and png are allowed.'));
        }
    }

*/
});
export default upload;