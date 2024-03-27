
type propsType = {
    to: string;
    from: string; 
}

export function Hello1(props: propsType) {

    const { to, from } = props; 

    console.log("Hello1"); 

    return (
        <>
            <div>hello {to} from : {from} </div>
        </>
    )
}
