import React from 'react';

interface IToastProps {
  duration: number;
  message: string;
}

function Toast(props: IToastProps): JSX.Element {
  const { duration, message } = props;

  const [isToastVisible, setIsToastVisible] = React.useState(true);

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setIsToastVisible(false);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      {isToastVisible && (
        <div className="toast">
          <p className="toast__message">{message}</p>
        </div>
      )}
    </>
  );
}

export default Toast;
