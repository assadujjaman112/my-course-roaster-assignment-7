import { useEffect } from "react";
import { useState } from "react";
import Cart from "./Cart/Cart";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="flex w-11/12 mx-auto  gap-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-5 gap-6 w-3/4">
        {courses.map((course) => (
          <div className="rounded-lg p-3 bg-[#FFF]" key={course.id}>
            <img className="w-full" src={course.img} alt="" />
            <h2 className="font-semibold text-lg my-3">{course.name}</h2>
            <p className="text-sm my-2">{course.details}</p>
            <div className="flex justify-between my-6">
              <h5 className="font-medium flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 1V23"
                    stroke="#1C1B1B"
                  />
                  <path
                    d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                    stroke="#1C1B1B"
                  />
                </svg>{" "}
                Price : {course.price}{" "}
              </h5>
              <p className="font-medium flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 6.04201C10.3516 4.56337 8.2144 3.74695 6 3.75001C4.948 3.75001 3.938 3.93001 3 4.26201V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.04201C13.6483 4.56328 15.7856 3.74686 18 3.75001C19.052 3.75001 20.062 3.93001 21 4.26201V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.997 13.6484 18.8134 12 20.292M12 6.04201V20.292"
                    stroke="#1C1B1B"
                  />
                </svg>
                Credit : {course.credit}h
              </p>
            </div>
            <button className="bg-[#2F80ED] rounded-lg text-white w-full py-1">
              Select
            </button>
          </div>
        ))}
      </div>
      <div className="w-1/4">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
