import * as h from 'vhtml';
import App from './components/App';
import * as http from 'http';

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  console.log(req.url);

  const name = 'TSX Example';
  const tpl = <App name={name}/>;

  res.end(tpl);
});

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on port ${port}`);
});
