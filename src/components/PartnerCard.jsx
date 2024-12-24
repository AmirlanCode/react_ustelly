import { useState } from "react";

const PartnerCard = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // Управление видимостью формы
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert("Форма отправлена!");
    setIsFormVisible(false);
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 ">
      <h2 className="text-xl font-semibold text-center mb-4">Для партнеров</h2>
      <p className="text-gray-600 mb-4">
        Присоединяйтесь к нашей партнерской программе и получайте выгодные
        условия!
      </p>

      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Стать партнером
      </button>

      {isFormVisible && (
        <form onSubmit={handleFormSubmit} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Введите ваше имя"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Электронная почта
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Введите вашу почту"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Номер телефона
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Введите ваш номер телефона"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Отправить заявку
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PartnerCard;
