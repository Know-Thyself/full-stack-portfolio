import express from 'express';
const router = express.Router();
import client from '../db.js';

router.get('/', async (req, res) => {
	const aboutQuery =
		"SELECT content -> 'about' AS about FROM portfolio";
	try {
		const result = await client.query(aboutQuery);
		res.json(result.rows[0].about);
	} catch (error) {
		res.status(500).send(error);
	}
});

export default router;
