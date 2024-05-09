const Nosotros = () => {
  return (
    <section
      id="nosotros"
      className="mx-auto grid h-[calc(100vh)] max-w-7xl grid-rows-2 md:grid-cols-2 md:grid-rows-none md:px-6 md:py-20"
    >
      <div className="relative flex w-full items-center justify-center">
        <div className="h-full w-full bg-red-600 md:p-20"></div>
      </div>
      <section className="flex flex-col items-center justify-evenly px-6 md:justify-center md:gap-12 md:px-0 md:pl-12 md:pt-10">
        <h1 className="text-3xl font-bold">Sobre nosotros</h1>
        <div className="flex flex-row ">
          <div className="hidden h-full w-[40px] bg-gradient-to-t from-red-600 via-gray-50 to-green-500 md:flex"></div>
          <p className=" text-[100%] md:pl-6 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            deleniti impedit cum aut quasi ratione sint minima, ipsum adipisci
            eaque blanditiis voluptatibus laudantium consequuntur in laboriosam
            fuga voluptas harum dolores assumenda et iure delectus? Ratione,
            incidunt odit. Perspiciatis veritatis ullam illum repudiandae
            deleniti earum magnam odit aperiam tempore dignissimos enim, quidem
            non totam minus quae illo minima quo omnis ipsam?
          </p>
        </div>
      </section>
    </section>
  );
};

export default Nosotros;
