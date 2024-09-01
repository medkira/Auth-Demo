import { Button } from 'primereact/button';
import { useFormStatus } from 'react-dom';

export default function LoginButton() {
    const state = useFormStatus();

    return (
        <Button label="Login" className="w-full p-3 text-xl" loading={state.pending}></Button>
    );
}
