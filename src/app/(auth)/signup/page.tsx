'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { formSignUpSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface SignUpPageProps {}

const SignUpPage: FC<SignUpPageProps> = ({}) => {
  const form = useForm<z.infer<typeof formSignUpSchema>>({
    resolver: zodResolver(formSignUpSchema),
  });

  const onSubmit = async (val: z.infer<typeof formSignUpSchema>) => {
    console.log(val);
  };

  return (
    <div>
      <div className="text-3xl text-center font-semibold mb-7">
        Get more opportunities
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Sign Up
          </Button>

          <div className="text-gray-500 text-sm mt-6">
            Already have an account?{' '}
            <Link href="/signin" className="text-primary font-medium">
              Sign In
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUpPage;
