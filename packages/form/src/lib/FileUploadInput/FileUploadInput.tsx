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

export interface FileUploadInputProps extends Omit<DropzoneOptions, 'accept'> {
  accept?: (
    | 'aac'
    | 'abw'
    | 'arc'
    | 'avif'
    | 'avi'
    | 'azw'
    | 'bin'
    | 'bmp'
    | 'bz'
    | 'bz2'
    | 'cda'
    | 'csh'
    | 'css'
    | 'csv'
    | 'doc'
    | 'docx'
    | 'eot'
    | 'epub'
    | 'gz'
    | 'gif'
    | 'htm'
    | 'html'
    | 'ico'
    | 'ics'
    | 'jar'
    | 'jpeg'
    | 'jpg'
    | 'js'
    | 'json'
    | 'jsonld'
    | 'mid'
    | 'midi'
    | 'mjs'
    | 'mp3'
    | 'mp4'
    | 'mpeg'
    | 'mpkg'
    | 'odp'
    | 'ods'
    | 'odt'
    | 'oga'
    | 'ogv'
    | 'ogx'
    | 'opus'
    | 'otf'
    | 'png'
    | 'pdf'
    | 'php'
    | 'ppt'
    | 'pptx'
    | 'rar'
    | 'rtf'
    | 'sh'
    | 'svg'
    | 'tar'
    | 'tif'
    | 'tiff'
    | 'ts'
    | 'ttf'
    | 'txt'
    | 'vsd'
    | 'wav'
    | 'weba'
    | 'webm'
    | 'webp'
    | 'woff'
    | 'woff2'
    | 'xhtml'
    | 'xls'
    | 'xlsx'
    | 'xml'
    | 'xul'
    | 'zip'
    | '3gp'
    | '3g2'
    | '7z'
  )[];
}

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

export function FileUploadInput({
  accept,
  maxFiles,
  ...rest
}: FileUploadInputProps) {
  const [files, setFiles] = useState<File[]>([]);
  // const [files, setFiles] = useState<File[]>(foo);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('!!!', file);
    setFiles((prevFiles: File[]) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const MIME_TYPE_MAP: { [key: string]: string } = {
    aac: 'audio/aac',
    abw: 'application/x-abiword',
    arc: 'application/x-freearc',
    avif: 'image/avif',
    avi: 'video/x-msvideo',
    azw: 'application/vnd.amazon.ebook',
    bin: 'application/octet-stream',
    bmp: 'image/bmp',
    bz: 'application/x-bzip',
    bz2: 'application/x-bzip2',
    cda: 'application/x-cdf',
    csh: 'application/x-csh',
    css: 'text/css',
    csv: 'text/csv',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    eot: 'application/vnd.ms-fontobject',
    epub: 'application/epub+zip',
    gz: 'application/gzip',
    gif: 'image/gif',
    htm: 'text/html',
    html: 'text/html',
    ico: 'image/vnd.microsoft.icon',
    ics: 'text/calendar',
    jar: 'application/java-archive',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    js: 'text/javascript',
    json: 'application/json',
    jsonld: 'application/ld+json',
    mid: 'audio/midi',
    midi: 'audio/midi',
    mjs: 'text/javascript',
    mp3: 'audio/mpeg',
    mp4: 'video/mp4',
    mpeg: 'video/mpeg',
    mpkg: 'application/vnd.apple.installer+xml',
    odp: 'application/vnd.oasis.opendocument.presentation',
    ods: 'application/vnd.oasis.opendocument.spreadsheet',
    odt: 'application/vnd.oasis.opendocument.text',
    oga: 'audio/ogg',
    ogv: 'video/ogg',
    ogx: 'application/ogg',
    opus: 'audio/opus',
    otf: 'font/otf',
    png: 'image/png',
    pdf: 'application/pdf',
    php: 'application/x-httpd-php',
    ppt: 'application/vnd.ms-powerpoint',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    rar: 'application/vnd.rar',
    rtf: 'application/rtf',
    sh: 'application/x-sh',
    svg: 'image/svg+xml',
    tar: 'application/x-tar',
    tif: 'image/tiff',
    tiff: 'image/tiff',
    ts: 'video/mp2t',
    ttf: 'font/ttf',
    txt: 'text/plain',
    vsd: 'application/vnd.visio',
    wav: 'audio/wav',
    weba: 'audio/webm',
    webm: 'video/webm',
    webp: 'image/webp',
    woff: 'font/woff',
    woff2: 'font/woff2',
    xhtml: 'application/xhtml+xml',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    xml: 'application/xml',
    xul: 'application/vnd.mozilla.xul+xml',
    zip: 'application/zip',
    '3gp': 'video/3gpp',
    '3g2': 'video/3gpp2',
    '7z': 'application/x-7z-compressed',
  };

  const acceptedMimeTypes = accept?.reduce(
    (acc, extension) => {
      const mimeType = MIME_TYPE_MAP[extension];
      if (mimeType) {
        if (!acc[mimeType]) {
          acc[mimeType] = [];
        }
        acc[mimeType].push(`.${extension}`);
      }
      return acc;
    },
    {} as { [key: string]: string[] },
  );

  const things = [
    {
      fileType: 'png',
      extension: '.png',
      mimeType: 'image/png',
    },
  ];

  const bar = {
    'image/png': ['.png'],
    // 'text/html': ['.html', '.htm'],
  };

  const baz = accept?.map((a) => {
    return { 'image/png': [`.${a}`] };
  });

  console.log('!!!', accept, bar, baz);

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
    // accept: {
    //   'image/png': ['.png'],
    //   // 'text/html': ['.html', '.htm'],
    // },
    // accept: bar,
    accept: acceptedMimeTypes,

    maxFiles,
    // add these
    // minSize,
    // maxSize,
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
        color: 'primary',
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
              {/* SVG, PNG, JPG or GIF (max. 800x400px) */}
              Accepted file types: {accept?.join(', ')}
              <br />
              {maxFiles && <span>Maximum number of files: {maxFiles}</span>}
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
