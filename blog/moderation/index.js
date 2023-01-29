const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
app.use(bodyParser.json());


const moderatedWordList = ['orange'];


app.post('/events', async (req, res) => {

    const { type, data } = req.body;

    if (type === 'CommentCreated') {
        //if its in the list, it's rejected. 
        const status = moderatedWordList.some(v => data.content.includes(v)) ? 'approved' : 'rejected'

        console.log(status);

        await axios.post('http://localhost:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        }).catch((err) => {
            console.log(err.message);
        });
    }

    res.send({});

});


app.listen(4003, () => {
    console.log('listening on port 4003')
});