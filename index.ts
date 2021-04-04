import express from 'express';
import bodyParser from "body-parser";
import { connect } from 'puppeteer';


interface Payload {
	fromUrl?: string;
	fromRawHTML?: string;
}


const app: express.Application = express();
app.use(bodyParser.json());

app.post('/api/pdf', async (req, res) => {
    const browser = await connect({browserWSEndpoint: 'ws://localhost:3000'});
    const page = await browser.newPage();
    const payload: Payload = req.body;
    if (payload.fromUrl) {
        await page.goto(payload.fromUrl);
    } else if(payload.fromRawHTML) {
        await page.setContent(payload.fromRawHTML);
    } else {
        throw new Error('Not implemented!');
    }
    const pdf = await page.pdf({path: 'page.pdf'});
    res.contentType('application/pdf');
    res.set({'Content-length': pdf.length});
    res.send(pdf);
});


app.listen(8000, () => {
    console.log('Server rodando');
});
