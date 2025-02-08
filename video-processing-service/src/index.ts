import express, {Application, Request, Response} from 'express';
import ffmpeg from 'fluent-ffmpeg';

const app: Application = express();
app.use(express.json());

app.post('/process-video', (req: Request, res: Response) => {
	// Get path of input video file from req.body
	console.log('reqeust body', req.body);
	const inputFilePath: string = req.body.inputFilePath;
	const outputFilePath: string = req.body.outputFilePath;

	if (!inputFilePath) {
		res.status(400).send('Bad Request: Missing input file path.');
	} else if (!outputFilePath) {
		res.status(400).send('Bad Request: Missing output file path.');
	}

});

const port = process.env.PORT || 3000;
app.listen(port, () =>
	console.log(`Video-processing-service listening on port ${port}!`)
);
