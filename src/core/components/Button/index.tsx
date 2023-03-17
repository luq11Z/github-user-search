import './styles.scss';

type Props = {
    text: string;
}

const Button = ({text} : Props) => (
    <button className="main-btn">
        {text}
    </button>
);

export default Button;
