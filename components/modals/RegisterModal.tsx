"use client";

import React from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import useRegisterModal from "@/hooks/use-register-modal";
import { Heading, Input, Modal } from "..";

interface Props {}

const RegisterModal: React.FunctionComponent<Props> = ({}) => {
  const registerModalState = useRegisterModal();
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(JSON.stringify(data, null, 4));

    // register endpoint
    axios
      .post("/api/register", data)
      .then((res) => {
        // close register modal
        registerModalState.onClose();
      })
      .catch((err) => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const RenderBodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" center />
      <Input register={register} errors={errors} required id="email" label="Email" type="email" disabled={isLoading} />
      <Input register={register} errors={errors} required id="name" label="Name" disabled={isLoading} />
      <Input
        register={register}
        errors={errors}
        required
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModalState.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModalState.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={RenderBodyContent}
    />
  );
};

export default RegisterModal;
