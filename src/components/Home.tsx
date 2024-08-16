export const Home = () => {
  return (
    <div className="mx-auto p-4 pt-10 max-w-screen-sm">
      <img
        src="/logotype.svg"
        className="max-w-64 mx-auto mb-8"
        alt="Corvid Design logo"
      />
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-2xl mb-3 font-bold">
            Thoughtful products for photographers and travelers
          </h1>
          <p className="mb-4">
            I'm Matt, and Corvid Design is my independent product studio. I
            discover and design things for adventurous people like me.
          </p>
          <p className="mb-4">
            When I travel, I like to go solo and light, with just one backpack
            whenever I can. I'm always looking for reliable, durable stuff that
            can improve my experience, especially when I'm out looking for a
            unique perspective for my photography.
          </p>
          <p className="mb-4">
            My goal is to deliver fun-to-use, buy-it-for-life products that help
            you get the most out of your adventures.
          </p>
        </div>

        <div className="mb-4">
          <a
            href="https://www.etsy.com/shop/CorvidDesignStudio"
            className="bg-slate-700 text-white rounded-md px-4 py-3 inline-block"
            target="_blank">
            View my products on Etsy &rarr;
          </a>
        </div>
        <div className="mb-4">
          <a
            href="https://mplewis.com"
            className="bg-slate-200 rounded-md px-4 py-3 inline-block"
            target="_blank">
            Learn more about me &rarr;
          </a>
        </div>
        <div>
          <a
            href="mailto:matt@corvid.design"
            className="bg-slate-200 rounded-md px-4 py-3 inline-block"
            target="_blank">
            Contact me &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};
