import pizzaHeaderImg from "../assets/pizza-header.jpg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="relative flex h-screen flex-col font-roboto ">
      <div className="absolute -z-30 h-full w-full bg-black">
        <img
          src={pizzaHeaderImg}
          alt="pizza"
          className="h-full w-full  object-cover object-center opacity-25"
        />
      </div>
      <Nav />
      <section className="flex h-full flex-col items-center justify-center gap-12  ">
        <h1 className="text-center text-5xl font-extrabold uppercase text-white md:text-8xl">
          Pizzería Italiana Agora
        </h1>
        <p className=" text-center text-xl text-white opacity-80 md:text-3xl">
          Delicias Italianas en Agora: El Sabor Auténtico de Italia!
        </p>
        <button className="md:text-md rounded-lg bg-red-600 p-2 px-6 font-medium  uppercase text-white">
          Haz tu reserva
        </button>
      </section>
    </header>
  );
};

export default Header;
