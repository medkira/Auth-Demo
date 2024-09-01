import { Button } from 'primereact/button';
import { useFormStatus } from 'react-dom';

export default function RegisterButton() {
    const state = useFormStatus();

    return (
        <Button label="Register" className="w-full p-3 text-xl" loading={state.pending}></Button>
    );
}
