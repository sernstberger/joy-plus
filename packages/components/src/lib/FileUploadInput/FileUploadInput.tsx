import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { Sheet, Stack, Typography } from '@mui/joy';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export function FileUploadInput() {
  const [files, setFiles] = useState<any>([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles((prevFiles: any) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Sheet
        color={isDragActive ? 'primary' : 'neutral'}
        variant="outlined"
        sx={{ padding: 2, borderStyle: 'dashed', borderWidth: 2 }}
      >
        <Stack alignItems="center" justifyContent="center">
          <CloudUploadOutlinedIcon />
          <Typography>Drag and drop files, or click to select files</Typography>
          <Typography level="body2">Other things</Typography>
        </Stack>
      </Sheet>
      <ul>
        {files.map((file: any, index: number) => (
          <li key={index}>
            {file.name} - {file.size} bytes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileUploadInput;
