import multer from 'multer';
//for the vercel deployment we will use memory storage
//for local development we can use disk storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
const storage = multer.memoryStorage();
const upload = multer({ storage });
export default upload;