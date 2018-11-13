import * as h from 'vhtml';
import Header from './Header';

interface Props {
  name: string;
}

export default ({name}: Props) => {
  return (
    <div>
      <Header appName={name}/>
      <main>
        This is an example of server side TSX components.
      </main>
    </div>
  );
}
