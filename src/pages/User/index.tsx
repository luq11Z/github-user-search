import { useState } from 'react';
import Button from '../../core/components/Button';
import { makeRequest } from '../../core/utils/request';
import './styles.scss';

type FormState = {
    user: string;
}

const User = () => {

    const [formData, setFormData] = useState<FormState>({
        user: ''
    });

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({...data, [name]: value}));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user = formData.user;

        makeRequest({user: user})
            .then(() => {
                setFormData({user: ''})
        });
    }

    return (
        <div className='page-search-card'>
            <div className="page-search-form">
                <h1 className="page-title">Encontre um perfil Github</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="form-input"
                        name="user"
                        value={formData.user}
                        onChange={handleOnChange}
                        placeholder="Usuário Github"
                    />
                    <Button text="Encontrar" />
                </form>
            </div>
        </div>
    );
}

export default User;