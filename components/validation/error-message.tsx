const ErrorMessage = ({ message }: { message: string[] | undefined }) => {
  return message
    ? message.map((error: string) => (
      <p key={error} className="font-bold text-sm text-red-500">
        {error}
      </p>
    ))
    : null;
};

export default ErrorMessage;
