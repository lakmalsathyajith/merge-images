import rp from "request-promise";
import CatSayError from "../errors/catSayError.js";
import { baseCatUrl } from "../config/index.js";

/**
 * Invoke the cat-ass api with the given user inputs
 *
 * @param   {String}  label  Label to place in the image on generation
 * @param   {object}  args   Other image properties, width, height, etc...
 *
 * @return  {string}         A binary string of the generated image
 */
export const getWhatCatSay = async ({ label, ...args }) => {
  const uParams = new URLSearchParams(args).toString();
  return await rp({
    uri: `${baseCatUrl}${label}?${uParams}`,
    encoding: "binary",
    resolveWithFullResponse: true,
  })
    .then((res) => {
      console.info("Received response with status:" + res.statusCode);
      return res.body;
    })
    .catch((err) => {
      console.error(err);
      throw new CatSayError();
    });
};
