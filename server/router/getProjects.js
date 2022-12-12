import express from 'express';
const router = express.Router();
import client from '../db.js';

router.get('/', async (req, res) => {
	const projectsQuery = "SELECT content -> 'projects' AS projects FROM portfolio";
	try {
		const result = await client.query(projectsQuery);
		res.json(result.rows[0].projects);
	} catch (error) {
		res.status(500).send(error);
	}
});

export default router;
