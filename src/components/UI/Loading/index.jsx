import { LoadingIcon } from '../Icons/UserInterface';

import './loading.css';

const Loading = (props) => {
  return (
    <div className="loading">
      <LoadingIcon />
      <span>{props.label}</span>
    </div>
  );
};

export default Loading;
