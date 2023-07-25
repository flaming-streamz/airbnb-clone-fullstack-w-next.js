"use client";

import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/hooks/use-login-modal";
import { Button, Heading, Input, Modal } from "..";

interface Props {}

const LoginModal: React.FunctionComponent<Props> = ({}) => {
  const router = useRouter();
  const loginModalState = useLoginModal();
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (!data?.email || !data?.password) {
      toast.error("Something went wrong!");
      return;
    }

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        toast.success("Logged in successfully");
        router.refresh();
        loginModalState.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const RenderBodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Login to your account" center />
      <Input register={register} errors={errors} required id="email" label="Email" type="email" disabled={isLoading} />
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

  const RenderFooterContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button outline label="Continue with Google" icon={FcGoogle} onClick={() => {}} />
      <Button outline label="Continue with Github" icon={AiFillGithub} onClick={() => {}} />

      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flow-row items-center justify-center gap-2">
          <div className="">Don&apos;t have an account?</div>
          <div onClick={loginModalState.onClose} className="text-neutral-800 cursor-pointer hover:underline">
            Register
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModalState.isOpen}
      title="Login Now"
      actionLabel="Continue"
      onClose={loginModalState.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={RenderBodyContent}
      footer={RenderFooterContent}
    />
  );
};

export default LoginModal;
