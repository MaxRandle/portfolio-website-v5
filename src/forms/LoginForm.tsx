"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FC } from "react";
import { GenericFormProps } from "./types";
import { Button } from "@ui/Button";
import { Input } from "@ui/Input";
import { Typography } from "@ui/Typography";

const schema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

type FormValues = z.infer<typeof schema>;

export const LoginForm: FC<GenericFormProps<FormValues>> = ({
  onSubmit,
  onSubmitErrors,
  isSubmitting,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      id="login-form"
      onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}
      {...props}
    >
      <div>
        <label htmlFor="email">
          <Typography>Email</Typography>
        </label>
        <Input
          className="mt-2"
          id="email"
          type="email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
        {onSubmitErrors?.email && <p>{onSubmitErrors.email.message}</p>}
      </div>
      <div className="mt-4">
        <label htmlFor="password">
          <Typography>Password</Typography>
        </label>
        <Input
          className="mt-2"
          id="password"
          type="password"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
        {onSubmitErrors?.password && <p>{onSubmitErrors.password.message}</p>}
      </div>
      <Button
        className="mt-6"
        disabled={isSubmitting}
        type="submit"
        form="login-form"
      >
        Log in
      </Button>
    </form>
  );
};
