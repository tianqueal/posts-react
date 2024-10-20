import './Button.css';

export default function Button({
  children,
  handleClick,
  color,
  type,
  isDisabled = false,
}) {
  return (
    <button
      className={`my-button ${color}`}
      type={type}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
