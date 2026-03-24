interface Props {
  message: string;
  onRetry: () => void;
}

const Error = ({ message, onRetry }: Props) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
};

export default Error;