import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// import { createRequire } from 'module'; // Bring in the ability to create the 'require' method back to ES module scope
// const require = createRequire(import.meta.url);
const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));
const PORT = process.env.PORT || 4000;

app.get('/api', (req, res) => {
	res.json({ message: 'Server is ready!' });
});

app.listen(PORT, () => {
	console.log(
		`Server is listening on port ${PORT} and ready to accept requests!`
	);
});
