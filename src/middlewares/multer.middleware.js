import multer from 'multer';
import path from 'path';

// Set storage to public/temp folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/temp'); // ✅ save files in ./public/temp
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

export const upload = multer({ storage });
