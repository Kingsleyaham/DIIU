import { gallery } from "../data/gallery";

const Gallery = () => {
  return (
    <div className="bg-white py-28 px-10">
      <div className="heading text-center pb-10">
        <h1 className="font-extrabold text-gray-800 text-3xl underline underline-offset-8">
          Photo Gallery
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery.map((elem, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={elem.img}
              alt={elem.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
