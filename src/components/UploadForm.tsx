import React, { CSSProperties, useState } from 'react';
import { Form } from 'react-bootstrap';
import ProgressBar from './ProgressBar';

type Props = { style: CSSProperties };

const UploadForm: React.FC<Props> = (props: Props) => {
  const [file, setFile] = useState<File>();
  const [error, setError] = useState<Error>();

  const types = ['image/png', 'image/jpeg'];

  const handleNewImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target!.files![0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      if (error) {
        setError(undefined);
      }
    } else {
      setFile(undefined);
      setError(new Error('Please select an image file (png or jpeg)'));
    }
  };

  return (
    <div style={props.style}>
      <Form>
        <Form.Control type="file" onChange={handleNewImage} />
      </Form>
      {error && <div className="error">{error}</div>}
      {file && <div>{file.name}</div>}
      {file && <ProgressBar file={file} setFile={setFile} />}
    </div>
  );
};

export default UploadForm;
