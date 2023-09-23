import { Status as StatusProps } from '../types';
import Status from './Status';

export default function Footer(props: StatusProps) {
  return (
    <>
      <Status handleStatus={props.handleStatus} status={props.status} />
      <footer className="bg-indigo-700 text-white p-4">
        <p className="text-center ">
          Build By{' '}
          <a className="underline" href="https://github.com/nurRiyad" target="_blank">
            Md Al Asad Nur Riyad
          </a>
        </p>
      </footer>
    </>
  );
}
