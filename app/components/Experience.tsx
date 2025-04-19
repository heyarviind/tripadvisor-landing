export default function Experience({
  imageUrl,
  title,
  rating = 0,
  reviewCount = 0,
  price = 0,
  currency = "$",
  heartIcon = true,
}: {
  imageUrl: string;
  title: string;
  rating?: number;
  reviewCount?: number;
  price?: number;
  currency?: string;
  heartIcon?: boolean;
}) {
  // Generate full and empty stars based on rating
  const renderRatingStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span
            key={i}
            className="bg-green-600 inline-flex w-3 h-3 mr-[1px] rounded-full"
          ></span>
        );
      } else {
        stars.push(
          <span
            key={i}
            className="bg-gray-300 inline-flex w-3 h-3 mr-[1px] rounded-full"
          ></span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full object-cover aspect-square"
        />

        {heartIcon && (
          <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        )}
      </div>

      <div className="pt-3">
        <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
          {title}
        </h3>

        <div className="flex items-center mb-1 text-sm">
          <span className="text-gray-700 mr-1">{rating.toFixed(1)}</span>
          <div className="flex mr-2">{renderRatingStars()}</div>
          <span className="text-gray-700">({reviewCount})</span>
        </div>

        <div className="text-sm font-bold">
          <span className="text-sm">from </span>
          <span className="">
            {currency}
            {price}
          </span>
          <span className="text-sm"> per adult</span>
        </div>
      </div>
    </div>
  );
}
