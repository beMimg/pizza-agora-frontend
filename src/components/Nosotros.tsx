import chefImg from "../assets/chef.jpg";

const Nosotros = () => {
  return (
    <section
      id="nosotros"
      className="mx-auto flex max-w-7xl flex-col gap-6 py-6 sm:gap-14 sm:py-14 md:grid-rows-none md:px-6"
    >
      <h1 className="p- text-center text-4xl font-bold">Sobre Nosotros</h1>
      <div className=" flex flex-col gap-6 px-6 md:grid md:grid-cols-2 md:flex-row ">
        <img
          src={chefImg}
          className="max-h-[600px] min-h-[400px] self-center object-cover object-center"
        />
        <article className="flex flex-col items-center justify-evenly gap-6  md:justify-center md:px-0 md:pl-12 ">
          <div className="flex flex-col gap-0 md:flex-row md:gap-2">
            <p className="font-medium italic">
              "Soy apasionado por mi trabajo."
            </p>
            <p>- Chef Matias</p>
          </div>
          <div className="flex flex-row ">
            <div className="hidden h-full w-[40px] bg-gradient-to-t from-red-600 via-gray-50 to-green-500 md:flex"></div>
            <p className=" text-[100%] md:pl-6 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate deleniti impedit cum aut quasi ratione sint minima,
              ipsum adipisci eaque blanditiis voluptatibus laudantium
              consequuntur in laboriosam fuga voluptas harum dolores assumenda
              et iure delectus? Ratione, incidunt odit. Perspiciatis veritatis
              ullam illum repudiandae deleniti earum magnam odit aperiam tempore
              dignissimos enim, quidem non totam minus quae illo minima quo
              omnis ipsam?
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Nosotros;
