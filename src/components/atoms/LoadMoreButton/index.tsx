import './index.sass'

interface LoadMoreButtonProps {
  handleClick: () => void;
}

export const LoadMoreButton = ({ handleClick }: LoadMoreButtonProps) => {
  return (
    <button type="button" className="load-more-button" onClick={handleClick}>
      Показати ще 5 квитків
    </button>
  );
};
