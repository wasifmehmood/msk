const requestHandler = (req, res) => {
        const url = req.url;
        const method = req.method;
        if(url === '/'){
            res.write('<h1>Hello!</h1>');
            res.write(`<body> <form method="POST" action="create-user"> 
            <input name="username" type="text"> <button type="submit">Create</button> </form> </body>`);
            return res.end();
        }

        if(url === '/users' && method === 'GET'){
            res.setHeader('Content-Type', 'text/html');
            res.write('<ul><li>User 1</li><li>User 2</li></ul>');
            return res.end();
        }

        if(url === '/create-user' && method === 'POST'){
            const body = [];
            req.on('data', (chunk) => {
                body.push(chunk);
            });

            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const username = parsedBody.split('=')[1];
                console.log('username: ', username);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })

        }
}

module.exports = requestHandler;