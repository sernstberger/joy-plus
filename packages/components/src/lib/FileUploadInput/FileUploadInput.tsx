// import React from 'react';
// import { ConnectInput } from '../ConnectInput';
// import { Checkbox, CheckboxProps } from '@mui/joy';

// export interface FileUploadInputProps extends CheckboxProps {
//   fieldName: string;
//   label: string;
//   helperText?: string;
//   // defaultValue?: boolean;
// }

// export function FileUploadInput({
//   fieldName,
//   label,
//   helperText = undefined,
//   required = false,
//   defaultValue = undefined,
//   defaultChecked = false,
// }: FileUploadInputProps) {
//   return (
//     <ConnectInput
//       {...{
//         fieldName,
//         label,
//         required,
//         helperText,
//         defaultValue,
//         defaultChecked,
//       }}
//       labelHidden
//     >
//       {({ formState, field }: any) => (
//         <Checkbox label={label} required value={field.value} />
//       )}
//     </ConnectInput>
//   );
// }

// export default FileUploadInput;

import { FileUpload } from '@mui/icons-material';
import { Sheet } from '@mui/joy';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export function FileUploadInput() {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {/* {isDragActive ? (
        <Sheet color="primary" variant="outlined">
          Drop the files here ...
        </Sheet>
      ) : (
        <Sheet color="neutral" variant="outlined">
          Drag 'n' drop some files here, or click to select files
          <FileUpload />
        </Sheet>
      )} */}
      <Sheet
        color={isDragActive ? 'primary' : 'neutral'}
        variant="outlined"
        sx={{ padding: 2, borderStyle: 'dashed', borderWidth: 2 }}
      >
        Drag 'n' drop some files here, or click to select files
        <FileUpload />
      </Sheet>
    </div>
  );
}

export default FileUploadInput;
