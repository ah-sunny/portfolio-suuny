
const IconDesign = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
    {/* Outer border */}
    <div className="relative w-16 h-16 border-4 border-teal-500 rounded-md">
      {/* Inner teal square */}
      <div className="absolute inset-1 bg-teal-500 flex items-center justify-center rounded-md">
        {/* Location icon */}
        <div className="w-6 h-6 relative">
          <div className="w-6 h-6 bg-gray-900 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-teal-500 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default IconDesign;
