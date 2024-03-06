import Image from 'next/image';

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 md-8">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="md-8 md:md-0 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white md-4">Summer Sale</h1>
          <p className="text-lg md:text-xl text-white mb-2">Enjoy discounts on selected items</p>
          <p className="text-2xl md:text-5xl text-yellow-400 font-bold">Get 50% off</p>
        </div>
        <div className="w-1/3 relative aspect-video">
          <Image src="/banner-image.png" alt="#" className="object-contain w-full" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
