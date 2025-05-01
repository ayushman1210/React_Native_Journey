
let name="ayushman";
const date=new Date();
const Hello=()=>{
    return (
    <div>
        <h1>hello i am {name}</h1>
        <p>current date {date.getDate()}</p>
    </div>
    )
}

export default Hello;