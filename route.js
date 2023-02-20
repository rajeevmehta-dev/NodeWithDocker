import express from 'express';
const router = express.Router();
router.get('/api', (req, res, next) => {
    const userData = [
        {
            id: 101,
            name: 'Shaktiman Ok',
            designation: 'Software Engineer Shaktimaan'
        },
        {
            id: 102,
            name: 'Deepak',
            designation: 'Software Manager'
        },
        {
            id: 103,
            name: 'Suraj Chauhan',
            designation: 'Serve Manager'
        },
        {
            id: 104,
            name: 'Anup',
            designation: 'Senior Software Engineer'
        },
        {
            id: 105,
            name: 'Ankit',
            designation: 'Software Engineer'
        },
        {
            id: 106,
            name: 'Rohit',
            designation: 'Software Engineer'
        }
    ]
    res.json({data: userData})
});
export default router;

