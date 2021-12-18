import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

type Props = {
  file: File;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
};

const ProgressBar: React.FC<Props> = ({ file, setFile }: Props) => {
  const { url, progress } = useStorage(file);
  console.log(progress);

  useEffect(() => {
    if (url) {
      setFile(undefined);
    }
  }, [url]);

  return (
    <div
      className="progress-bar"
      style={{ width: progress + '%', height: '2px', backgroundColor: 'red' }}
    ></div>
  );
};

export default ProgressBar;
