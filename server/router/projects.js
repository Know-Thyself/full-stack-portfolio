import express from 'express';
const router = express.Router();
import client from '../db.js';

router.get('/', async (req, res) => {
	const portfolioQuery = 'SELECT * FROM portfolio';
	try {
		const result = await client.query(portfolioQuery);
    console.log(result.rows)
		res.json(result.rows);
	} catch (error) {
		res.status(500).send(error);
	}
});

export default router;
