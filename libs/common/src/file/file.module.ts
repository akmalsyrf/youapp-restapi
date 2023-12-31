import { HttpException, HttpStatus, Module } from '@nestjs/common';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { v4 as uuid } from 'uuid';
import { MulterModule } from '@nestjs/platform-express';

export const multerOptions = {
  limits: {
    fileSize: 1024 * 1024 * 10,
  },

  // Check the mimetypes to allow for upload
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif|pdf)$/)) {
      // Allow storage of file
      cb(null, true);
    } else {
      // Reject file
      cb(
        new HttpException(
          `Unsupported file type ${extname(file.originalname)}`,
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },

  storage: diskStorage({
    destination: 'files/',

    // File modification details
    filename: (req: any, file: any, cb: any) => {
      cb(null, `${uuid()}${extname(file.originalname)}`);
    },
  }),
};

@Module({
  imports: [MulterModule.register(multerOptions)],
  controllers: [],
  providers: [],
})
export class FileModule {}
