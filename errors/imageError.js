/**
 * Created custom error type when image processing prompt an error
 */
class ImageMergeError extends Error {
  message = "Error merging images.";
}

export default ImageMergeError;
