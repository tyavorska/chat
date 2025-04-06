import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod'; // Zod for validation

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
});

type FormData = z.infer<typeof schema>;

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: async (data: any) => {
      try {
        schema.parse(data);
        return { values: data, errors: {} };
      } catch (err) {
        return {
          values: {},
          errors: err.errors.reduce((acc: any, { path, message }: any) => {
            acc[path[0]] = { message };
            return acc;
          }, {}),
        };
      }
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        <input
          id="name"
          {...register('name')}
          className="border p-2 rounded-md"
        />
        {errors.name && (
          <span className="text-red-500 text-xs">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          id="email"
          {...register('email')}
          className="border p-2 rounded-md"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
      </div>
    </form>
  );
};

export default Form;
