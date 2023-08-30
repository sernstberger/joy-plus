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

const file = new File(['test1,test2'], 'test.csv', { type: 'text/csv' });

// const foo: File[] = [
//   {
//     path: 'Screenshot 2023-08-29 at 9.46.30 AM.png',
//     lastModified: 1693316796382,
//     // lastModifiedDate:   Tue Aug 29 2023 09:46:36 GMT-0400 (Eastern Daylight Time) {},
//     lastModifiedDate:
//       'Tue Aug 29 2023 09:46:36 GMT-0400 (Eastern Daylight Time)',
//     name: 'Screenshot 2023-08-29 at 9.46.30 AM.png',
//     size: 137786,
//     type: 'image/png',
//     webkitRelativePath: '',
//   },
// ];

export function FileUploadInput({ ...rest }: FileUploadInputProps) {
  const [files, setFiles] = useState<File[]>([]);
  // const [files, setFiles] = useState<File[]>(foo);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('!!!', file);
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
      // 'text/html': ['.html', '.htm'],
    },
    maxFiles: 6,
  });

  const getColor = () => {
    if (isDragAccept) {
      return {
        color: 'success',
        variant: 'outlined',
      };
    }
    if (isDragReject) {
      return {
        color: 'danger',
        variant: 'outlined',
      };
    }
    if (isFocused) {
      return {
        color: 'warning',
        variant: 'outlined',
      };
    }
    return {
      color: 'neutral',
      variant: 'outlined',
    };
  };

  interface Foo {
    color: any;
    variant: any;
  }

  // sheet props instead?
  // OverridableStringUnion<ColorPaletteProp, SheetPropsColorOverrides>

  const foo: Foo = getColor();

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Sheet
          // color={isDragActive ? 'primary' : 'neutral'}
          color={foo.color}
          // color="success"
          // variant="outlined"
          variant={isDragAccept ? 'soft' : 'outlined'}
          sx={{
            padding: 2,
            // borderStyle: 'dashed', borderWidth: 2
          }}
        >
          <Stack alignItems="center" justifyContent="center">
            <CloudUploadOutlinedIcon />
            <Typography>
              Drag and drop files, or click to select files
            </Typography>
            <Typography level="body-sm">
              {/* Other things can go here */}
              SVG, PNG, JPG or GIF (max. 800x400px)
            </Typography>
          </Stack>
        </Sheet>
      </div>
      {files && files.length > 0 && (
        <List variant="outlined" sx={{ marginTop: 2 }}>
          {files.map((file: File, index: number) => (
            <React.Fragment key={index}>
              <ListItem>
                <div>
                  <Typography>{file.name}</Typography>
                  <Typography level="body-sm">{file.size} bytes</Typography>
                </div>
              </ListItem>
              {files.length > 0 && index < files.length - 1 && <ListDivider />}
            </React.Fragment>
          ))}
        </List>
      )}
    </div>
  );
}

export default FileUploadInput;
