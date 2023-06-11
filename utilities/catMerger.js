import mergeImg from "merge-img";
import { writeFile } from "fs/promises";
import { join } from "path";
import ImageMergeError from "../errors/imageError.js";
import FileError from "../errors/fileError.js";
import { outputFile } from "../config/index.js";

/**
 * Merge two images in binary format and create a single image, saved in the configured location
 *
 * @param   {string}  cat1Binary  binary string of a generated image from cat-ass
 * @param   {string}  cat2Binary  binary string of a generated image from cat-ass
 * @param   {number}  width       width of the generated image, default | user provided
 *
 * @return  {void}
 */
const mergeCatSays = (cat1Binary, cat2Binary, width) => {
  // created image properties to merge
  const mergeConfig = [
    // eslint-disable-next-line no-undef
    { src: new Buffer.from(cat1Binary, "binary"), x: 0, y: 0 },
    // eslint-disable-next-line no-undef
    { src: new Buffer.from(cat2Binary, "binary"), x: width, y: 0 },
  ];

  mergeImg(mergeConfig)
    .then((img) => {
      img.getBuffer("image/jpeg", (err, buffer) => {
        if (err) {
          console.error(err);
          // throw custom image error
          throw new ImageMergeError();
        }

        // eslint-disable-next-line no-undef
        const fileOut = join(process.cwd(), outputFile);

        writeFile(fileOut, buffer, "binary")
          .then(() => {
            console.info("The file was saved!");
          })
          .catch((error) => {
            console.error(error);
            // throw custom file error
            throw new FileError();
          });
      });
    })
    .catch((error) => {
      console.error(error);
      // throw custom image error
      throw new ImageMergeError();
    });
};

export default mergeCatSays;
