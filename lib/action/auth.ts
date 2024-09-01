'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { registerSchema } from './server-validation/schema'

import { createClient } from '@/utils/supabase/server'


export async function login(prevState: any, formData: FormData) {
    const supabase = createClient()

    const user = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    // console.log("user => ", user);

    const { error }: { error: any } = await supabase.auth.signInWithPassword(user)

    if (error) {
        return 'Invalid credentials.';
    }

    // revalidatePath('/', 'layout')
    redirect('/dashboard')
}

export async function register(prevState: any, formData: FormData) {
    const supabase = createClient()

    const user = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirm-password') as string,
    }


    const validatedFields = registerSchema.safeParse(user);


    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {

        // flatten method is provided by Zod 
        // It transforms the error structure into a simpler format.
        // console.log("from auth",validatedFields.error.flatten().fieldErrors.confirmPassword);
        // console.log(validatedFields.error.flatten().fieldErrors)
        // const zodErrors = validatedFields.error.flatten().fieldErrors;


        return validatedFields.error.flatten().fieldErrors

    }


    const { data, error } = await supabase.auth.signUp({ email: user.email, password: user.password });

    // need to fix this in proper error handling.
    // the current code sucks
    // refactor check if the email is exist should be in hight priority
    if (error) {
        return { AuthError: [error.code] } as any
    }

    redirect('/dashboard')
}

export async function signOut() {
    const supabase = createClient()

    await supabase.auth.signOut()
    redirect('/auth/login')
}