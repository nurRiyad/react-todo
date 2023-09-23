import Status from './Status';

interface Props {
  status: 'all' | 'not' | 'com';
  handleStatus: (newStatus: 'all' | 'not' | 'com') => void;
}

export default function Footer(props: Props) {
  return (
    <>
      <Status handleStatus={props.handleStatus} status={props.status} />
      <footer className="bg-indigo-700 text-white p-4">
        <p className="text-center">Build By Md Al Asad Nur Riyad</p>
      </footer>
    </>
  );
}
