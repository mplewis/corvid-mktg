export const Home = () => {
  return (
    <div className="mx-auto p-4 max-w-screen-sm">
      <img
        src="/logotype.svg"
        className="max-w-64 mx-auto mb-6"
        alt="Corvid Design logo"
      />
      <div className="text-center">
        <h1 className="text-xl mb-3">
          Thoughtful products for photographers and travelers
        </h1>
        <p className="mb-5">
          My name is Matt, and Corvid Design is my independent product studio. I
          design items for adventurous people and one-bag travel. I focus on
          high quality, tiny details, and building things you can own for life.
        </p>
        <p className="mb-5">
          <a
            href="https://www.etsy.com/shop/CorvidDesignStudio"
            className="bg-gray-800 text-white rounded-md px-4 py-3 inline-block"
            target="_blank">
            Shop our products on Etsy &rarr;
          </a>
        </p>
        <p>
          <a
            href="https://mplewis.com"
            className="rounded-md px-4 py-3 inline-block"
            target="_blank">
            Learn more about me &rarr;
          </a>
        </p>
      </div>
    </div>
  );
};
