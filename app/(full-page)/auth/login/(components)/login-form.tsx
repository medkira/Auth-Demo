'use client';
import { useFormState } from 'react-dom';

import LoginButton from './login-button';

import { login } from '@/lib/action/auth';
import ErrorMessage from '@/components/validation/error-message';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';

export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(login, undefined);

    return (
        <form
            action={dispatch}
            className="space-y-6"
        // onSubmit={(e) => e.preventDefault()}
        >

            <div>
                <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                    Email
                </label>
                <InputText required id="email1" name="email" type="text" placeholder="Email address" className="w-full md:w-30rem mb-3" style={{ padding: '1rem' }} />
                <ErrorMessage message={[errorMessage!]} />

                <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                    Password
                </label>
                <Password required id="password1" name='password' placeholder="Password" toggleMask className="w-full mb-3" inputClassName="w-full p-3 md:w-30rem"></Password>
                <ErrorMessage message={[errorMessage!]} />

                <div className="flex align-items-center justify-content-between mb-5 gap-5">
                    <div className="flex align-items-center">
                        <Checkbox inputId="rememberme1" checked={false} className="mr-2"></Checkbox>
                        <label htmlFor="rememberme1">Remember me</label>
                    </div>
                    <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                        Forgot password?
                    </a>
                </div>
            </div>
            <LoginButton />
        </form>
    );
}
