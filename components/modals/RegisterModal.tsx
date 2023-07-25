"use client";

import React from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/hooks/use-register-modal";
import { Heading, Modal } from "..";

interface Props {}

const RegisterModal: React.FunctionComponent<Props> = ({}) => {
  const registerModalState = useRegisterModal();
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    delayError: 500,
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
        console.log("REGISTRATION MODAL ERROR ~", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const RenderBodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" center />
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
