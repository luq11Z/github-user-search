import { useState } from 'react';
import Button from '../../core/components/Button';
import { makeRequest } from '../../core/utils/request';
import './styles.scss';
import { User } from '../../core/types/user';
import InfoLoader from './components/Loaders/InfoLoader';
import ImageLoader from './components/Loaders/ImageLoader';
import dayjs from 'dayjs';

type FormState = {
    user: string;
}

const Search = () => {

    const[userInfo, setUserInfo] = useState<User>();
    const [isLoading, setLoading] = useState(false);
    
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

        setLoading(true);
        const user = formData.user;
        
        makeRequest({user: user})
            .then(response => {
                setUserInfo(response.data);
            })
            .finally(() => {
                setLoading(false);
        });
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
            {!isLoading ? <></> : (
                <div className="page-user-card">
                    <div className="page-user-info">
                        <ImageLoader />
                        <InfoLoader />
                    </div>
                </div>
            )}
            {userInfo === undefined ? <></> : (
                <div className="page-user-card">
                    <div className="page-user-info">
                        <div className="user-image">
                            <img src={userInfo?.avatar_url} alt="user-img"/>
                        </div>
                        <div className="row user-top-info"> 
                            <span>Repositórios publicos: {userInfo?.public_repos}</span>
                            <span>Seguidores: {userInfo?.followers}</span>
                            <span>Seguindo: {userInfo?.following}</span>
                        </div>
                        <div className="row user-info-card">
                            <h1>Informações</h1>
                            <div className="user-data">
                                <span><strong>Empresa:</strong> {userInfo?.company}</span>
                                <span><strong>Website/Blog:</strong> {userInfo?.blog}</span>
                                <span><strong>Localidade:</strong> {userInfo?.location}</span>
                                <span><strong>Membro desde: </strong> 
                                    {dayjs(userInfo?.created_at,"YYYY-MM-DDTh:mm:ssZ").format("DD/MM/YYYY")}
                                </span>
                            </div>    
                        </div>
                        <div className="btn-details">
                            <a href={userInfo?.html_url}>
                                <Button text="Ver perfil"/>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Search;