import React, { CSSProperties, useState } from 'react';
import { Form } from 'react-bootstrap';

type Props = { style: CSSProperties };

const UploadForm: React.FC<Props> = (props: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const types = ['image/png', 'image/jpeg'];

  const handleNewImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target!.files![0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      if (error) {
        setError(null);
      }
    } else {
      setFile(null);
      setError(new Error('Please select an image file (png or jpeg)'));
    }
  };

  return (
    <div style={props.style}>
      {error && <div className="error">{error}</div>}
      {file && <div>{file.name}</div>}
      <Form>
        <Form.Control onChange={handleNewImage} type="file" />
      </Form>
    </div>
  );
};

export default UploadForm;
