import * as h from 'vhtml';

interface Props {
  appName: string;
}

export default (prop: Props) => {
  return (
    <header>
      <h1>{prop.appName}</h1>
    </header>
  );
}
