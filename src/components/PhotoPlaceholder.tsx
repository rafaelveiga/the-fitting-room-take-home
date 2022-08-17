const PhotoPlaceholder = () => (
  <div className="animate-pulse height-screen">
    <div className="flex justify-between gap-5">
      <div className="flex-1">
        <div className="flex-1 bg-gray-300 h-96 rounded" />
        <div className="flex-1 bg-gray-200 h-96 rounded mt-5" />
        <div className="flex-1 bg-gray-100 h-96 rounded mt-5" />
      </div>
      <div className="flex-1">
        <div className="flex-1 bg-gray-300 h-72 rounded" />
        <div className="flex-1 bg-gray-200 h-80 rounded mt-5" />
        <div className="flex-1 bg-gray-100 h-72 rounded mt-5" />
      </div>
      <div className="flex-1">
        <div className="flex-1 bg-gray-300 h-96 rounded" />
        <div className="flex-1 bg-gray-200 h-96 rounded mt-5" />
        <div className="flex-1 bg-gray-100 h-64 rounded mt-5" />
      </div>
    </div>
  </div>
);

export default PhotoPlaceholder;
