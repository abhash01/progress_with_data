import './App.css';

const Progress = ({ progress, color }) => {
  const styleprogress = {
    width: `${progress}%`,
    backgroundColor: `${color}` || 'lightgreen',
    borderRadius: 10,
    height: 20,
  };
  return (
    <div className="container">
      <div className="progress-bg">
        <div style={styleprogress}>{`${progress}%`}</div>
      </div>
    </div>
  );
};

export default Progress;
