function SayHello(props) {
    const name = props.name;
    const company = props.company;

    return (
        <p>
            Hallo, {name} from {company}!;
        </p>
    );
}

export default SayHello;