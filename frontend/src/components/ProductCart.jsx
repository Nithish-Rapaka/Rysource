function ProductCard({ product }) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transfoem p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-cover rounded-lg mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-900 truncate">
          {product.name}
        </h2>
        <h2 className="text-sm text-black">{product.description}</h2>
        <h2 className="text-2xl text-black">{product.price}</h2>
        <p className="text-sm text-black">posted on:{product.created_at}</p>
      </div>
    </>
  );
}
