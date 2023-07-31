import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import {
  List,
  ListDivider,
  ListItem,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy';
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
      <List variant="outlined" sx={{ marginTop: 2 }}>
        {files.map((file: any, index: number) => (
          <>
            <ListItem key={index}>
              <div>
                <Typography>{file.name}</Typography>
                <Typography level="body2">{file.size} bytes</Typography>
              </div>
            </ListItem>
            <ListDivider />
          </>
        ))}
      </List>
    </div>
  );
}

export default FileUploadInput;
