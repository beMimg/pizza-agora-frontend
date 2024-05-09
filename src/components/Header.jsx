import pizzaHeaderImg from "../assets/pizza-header.jpg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="font-roboto relative h-screen ">
      <div className="absolute -z-30 h-full w-full bg-black">
        <img
          src={pizzaHeaderImg}
          alt="pizza"
          className="h-full w-full  object-cover object-center opacity-30"
        />
      </div>
      <Nav />
      <section className="flex h-full flex-col items-center justify-center gap-12 pb-[140px]">
        <h1 className="text-center text-5xl font-extrabold uppercase text-white md:text-8xl">
          Pizzería Italiana Agora
        </h1>
        <p className=" text-center text-xl text-white opacity-80 md:text-4xl">
          Delicias Italianas en Agora: El Sabor Auténtico de Italia!
        </p>
        <button className="rounded-lg bg-red-700 p-4 text-xl text-white opacity-80 md:text-4xl">
          Reserva ya
        </button>
      </section>
    </header>
  );
};

export default Header;
