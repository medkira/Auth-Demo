'use client';
import { useFormState } from 'react-dom';


import { login, register } from '@/lib/action/auth';
import ErrorMessage from '@/components/validation/error-message';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import RegisterButton from './register-button';
import Link from 'next/link';

export default function RegisterForm() {
    const [errorMessage, dispatch] = useFormState(register, undefined);


    return (
        <form
            action={dispatch}

        // onSubmit={(e) => e.preventDefault()}
        >

            <div>
                <label htmlFor="name" className="block text-900 text-xl font-medium mb-2">
                    Name
                </label>
                <InputText id="name" name='name' type="text" placeholder="Name" className="w-full md:w-30rem mb-3" style={{ padding: '1rem' }} />
                <ErrorMessage message={errorMessage?.name} />

                <label htmlFor="email" className="block text-900 text-xl font-medium mb-2">
                    Email
                </label>
                <InputText name='email' id="email" type="text" placeholder="Email address" className="w-full md:w-30rem mb-3" style={{ padding: '1rem' }} />
                <ErrorMessage message={errorMessage?.email} />
                <ErrorMessage message={errorMessage?.AuthError} />

                <label htmlFor="password" className="block text-900 font-medium text-xl mb-2">
                    Password
                </label>
                <Password name='password' inputId="password" placeholder="Password" toggleMask className="w-full mb-3" inputClassName="w-full p-3 md:w-30rem"></Password>
                <ErrorMessage message={errorMessage?.password} />

                <label htmlFor="confirmPassword" className="block text-900 font-medium text-xl mb-2">
                    Confirm Password
                </label>
                <Password name='confirm-password' inputId="confirmPassword" placeholder="Confirm Password" toggleMask className="w-full mb-3" inputClassName="w-full p-3 md:w-30rem"></Password>
                <ErrorMessage message={errorMessage?.confirmPassword} />

                <div className="flex align-items-center justify-content-between mb-3 gap-5">
                    <div className="flex align-items-center">
                        <Checkbox inputId="agreeTerms" checked={false} className="mr-2"></Checkbox>
                        <label htmlFor="agreeTerms">I agree to the terms and conditions</label>
                    </div>
                </div>

                <RegisterButton />
            </div>
        </form>
    );
}
