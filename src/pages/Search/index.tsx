import { useState, useEffect } from 'react';
import Button from '../../core/components/Button';
import { makeRequest } from '../../core/utils/request';
import { ReactComponent as UserImage } from '../../core/assets/images/img-profile.svg';
import './styles.scss';
import { User } from '../../core/types/user';

type FormState = {
    user: string;
}

const Search = () => {

    const[user, setUser] = useState<User>();
    
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
            .then(response => setUser(response.data));
    }

    return (
        <div className='page-container'>
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
            {user === undefined || null ? <></> 
            : (
                <div className="page-user-card">
                <div className="page-user-info">
                    <div className="user-image">
                        <UserImage />
                    </div>
                    <div className="row user-top-info"> 
                        <span>Repositórios publicos: {user?.public_repos}</span>
                        <span>Seguidores: {user?.followers}</span>
                        <span>Seguindo: {user?.following}</span>
                    </div>
                    <div className="row user-info-card">
                       <h1>Informações</h1>
                        <div className="user-data">
                            <span><strong>Empresa:</strong> {user?.company}</span>
                            <span><strong>Website/Blog:</strong> {user.blog}</span>
                            <span><strong>Localidade:</strong> {user.location}</span>
                            <span><strong>Membro desde:</strong> {user.created_at}</span>
                        </div>    
                    </div>
                    <div className="btn-details">
                        <Button text="Ver perfil"/>
                    </div>
                </div>
            </div>
            )}
           
        </div>
    );
}

export default Search;