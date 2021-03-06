import Image from "next/image";
import { useState, useEffect } from "react";
const CardMain = ({
  city,
  hour,
  clima,
  velocidad,
  agua,
  solHora,
  temp,
  tempF,
  icon,
}) => {
  const [date, setDate] = useState("");
  const [format, setFormat] = useState("");
  const dataToday = () => {
    const today = new Date();
    const hourNow = today.getHours();
    const minutesNow = today.getMinutes();
    setDate(`${hourNow}:${minutesNow}`);
    setFormat(`${hourNow >= 12 ? "pm" : "am"}`);
  };
  useEffect(() => {
    setInterval(dataToday, 1000);
  }, [date]);
  return (
    <section className="bg-gradient-to-r from-prpleInit-272  to-prpleEnd-586 flex items-center justify-between m-7 pt-0 pb-8 pr-5 text-white rounded-xl sm:flex-col sm:mx-40 relative">
      <div className="absolute top-0 right-0 bg-prpeLigth-869 rounded-bl-xl rounded-tr-xl py-px px-8">
        <span>
          {date}
          {format}
        </span>
      </div>
      <div className="flex items-center flex-col">
        <Image
          className="object-contain img-responsive"
          src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
          alt="clima"
          width="130"
          height="130"
          quality="90"
          priority
          placeholder="blur"
          blurDataURL
        />
        <span className="text-xl -mt-8 sm:-mt-4 sm:text-3xl">{clima}</span>
      </div>
      {/*info */}
      <header className="flex flex-col items-center mt-8 sm:mt-2">
        <h1 className=" text-3xl sm:text-6xl sm:mb-2">{city}</h1>
        <p className="text-lg">
          {temp}°C / {tempF}°F
        </p>
        <aside className="flex">
          <div className="mr-4 flex items-center">
            <span className="mr-1">{velocidad}km/h</span>
            <box-icon name="wind" color="#ffffff" size="sm"></box-icon>
          </div>
          <div className="flex items-center">
            <span className="mr-1">{agua}%</span>
            <box-icon
              name="droplet"
              type="solid"
              size="sm"
              color="#ffffff"
            ></box-icon>
          </div>
        </aside>
      </header>
    </section>
  );
};

export default CardMain;
