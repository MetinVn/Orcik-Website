function Products({ img, price, stock, type, order }) {
  return (
    <div className="min-h-full font-['Poppins',sans-seriff] font-light flex flex-row gap-1 items-center sm:justify-center min-w-full sm:gap-[120px] px-1 md:px-10">
      <img
        className={`${order} w-full h-full mx-auto sm:m-0 max-w-[150px] max-h-[150px] sm:max-h-[200px] sm:max-w-[200px] rounded-md md:max-w-[300px] md:max-h-[300px] lg:max-h-[400px] lg:max-w-[400px] object-contain object-center`}
        src={img}
        alt="food"
      />
      <div className="text-[11px] sm:text-sm gap-2 sm:gap-1 md:gap-5 lg:gap-8 sm:tracking-normal sm:leading-normal lg:text-lg tracking-tighter leading-tight lg:tracking-normal lg:leading-normal w-full mx-auto sm:m-0 flex flex-col justify-between max-w-[200px] sm:max-w-[300px] lg:max-w-[500px] text-black">
        <div className="flex flex-row justify-between text-[#FFE4C4]">
          Tür: <span>{type}</span>
        </div>
        <div className="flex flex-row justify-between text-[#FFE4C4]">
          Fiyat: <span className="font-bold">{price + "₺"}</span>
        </div>
        <div className="flex flex-row justify-between border-[1px] border-r-0 border-l-0 border-white">
          <span className="text-[#FFE4C4]">Stok durumu:</span>
          <span className="text-[#780000]">{stock + "!"}</span>
        </div>
      </div>
    </div>
  );
}
export default Products;
