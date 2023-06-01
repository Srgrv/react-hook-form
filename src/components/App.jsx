//packages
import React from "react";
import { useForm } from "react-hook-form"; // хук из react-hook-form

const App = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div>
      <h2>React-hook-form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            FirstName:
            <input
              {...register("firstName", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 5,
                  message: "Длина должна составлять более 5 символов",
                },
              })}
            />
          </label>
        </div>
        <div>
          <label>
            LastName:
            <input
              {...register("lastName", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 2,
                  message: "Длина должна составлять более 2 символов",
                },
              })}
            />
          </label>
        </div>

        <input type="submit" />
        <div>
          {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </div>
        <div>
          {errors?.lastName && <p>{errors?.lastName?.message || "Error"}</p>}
        </div>
      </form>
    </div>
  );
};

export default App;
