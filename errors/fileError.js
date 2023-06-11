/**
 * Created custom error type when file operation prompt error
 */
class FileError extends Error {
  message = "Error creating file.";
}

export default FileError;
