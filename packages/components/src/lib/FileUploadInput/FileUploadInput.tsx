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
import { DropzoneOptions, useDropzone } from 'react-dropzone';

export interface FileUploadInputProps extends DropzoneOptions {}

export function FileUploadInput({ ...rest }: FileUploadInputProps) {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prevFiles: File[]) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    isFocused,
  } = useDropzone({
    ...rest,
    onDrop,
    // accept: ['image/*'] as any,
    accept: {
      'image/png': ['.png'],
      'text/html': ['.html', '.htm'],
    },
    maxFiles: 6,
  });

  // const getColor = (props) => {
  //   if (props.isDragAccept) {
  //       return '#00e676';
  //   }
  //   if (props.isDragReject) {
  //       return '#ff1744';
  //   }
  //   if (props.isFocused) {
  //       return '#2196f3';
  //   }
  //   return '#eeeeee';
  // }

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Sheet
          color={isDragActive ? 'primary' : 'neutral'}
          // color="success"
          variant="outlined"
          sx={{ padding: 2, borderStyle: 'dashed', borderWidth: 2 }}
        >
          <Stack alignItems="center" justifyContent="center">
            <CloudUploadOutlinedIcon />
            <Typography>
              Drag and drop files, or click to select files
            </Typography>
            <Typography level="body-sm">Other things can go here</Typography>
          </Stack>
        </Sheet>
      </div>
      {files && files.length > 0 && (
        <List variant="outlined" sx={{ marginTop: 2 }}>
          {files.map((file: File, index: number) => (
            <>
              <ListItem key={index}>
                <div>
                  <Typography>{file.name}</Typography>
                  <Typography level="body-sm">{file.size} bytes</Typography>
                </div>
              </ListItem>
              {files.length > 0 && index < files.length - 1 && <ListDivider />}
            </>
          ))}
        </List>
      )}
    </div>
  );
}

export default FileUploadInput;
