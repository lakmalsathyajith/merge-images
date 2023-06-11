/**
 * Created custom error type when cat-ass api fails to response
 */
class CatSayError extends Error {
  message = "Cat says error, Please try again.";
}

export default CatSayError;
