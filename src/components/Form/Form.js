import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { MyInput, MyButton } from "../UI";
import { InputValidator } from "../../validator/input.validator";
import styles from "./Form.module.css";

export const Form = ({ books, setBooks }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(InputValidator),
    mode: "onTouched",
  });

  const submit = (data) => {
    setBooks([...books, { ...data, id: new Date().getTime(), isRead: false }]);

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <MyInput
          type="text"
          placeholder={"Enter book name..."}
          defaultValue={""}
          {...register("name")}
        />
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}

        <MyInput
          type="text"
          placeholder={"Enter book description..."}
          defaultValue={""}
          {...register("description")}
        />
        {errors.description && (
          <span className={styles.error}>{errors.description.message}</span>
        )}

        <MyButton>Add</MyButton>
      </form>
    </div>
  );
};
