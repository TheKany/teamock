const SkeletonBox = () => {
  return (
    <div className="skeleton__Box">
      <div className="heart throb">
        <div className="word">loading...</div>

        <div className="wrapper">
          <div className="bg">
            <div className="el"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonBox;
