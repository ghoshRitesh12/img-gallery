import dotenv from 'dotenv';

dotenv.config();

export default {
  origin: [
    process.env.CLIENT_PROD_BASEURL,
    process.env.CLIENT_DEV_BASEURL
  ],
  optionSuccessStatus: 200,
}
