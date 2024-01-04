'use client';

interface Props {
    title: string | undefined;
    items: string[] | undefined;
}

const Bullets = (props: Props) => {
    if (props.title === undefined || props.items === undefined) {
        return <div/>
    }

    return(
        <div>
            <h1 style={{paddingTop:"50px"}}>{props.title}</h1>
            <div style={{textAlign: "center"}}>
                <ul style={{display: "inline-block", marginTop: "-10px"}}>
                    {props.items.map((bullet) => {
                        return(<li key={bullet} className="P-Lato">{bullet}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Bullets;