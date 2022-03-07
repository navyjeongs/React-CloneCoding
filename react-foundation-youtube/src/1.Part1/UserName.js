export default function UserName(props){

    const msg = (props.age > 19) ? "성인이네" : 20-props.age + "년후에 성인이네"

    return (
        <div>
            <p>Hello, {props.name}</p>
            {msg} 
        </div>
    );
}

// 객체를 받는 것이 아닌 특정 값만 넘겨받으면 아래와 같이 사용해도 된다.
// export default function UserName({name}){
//     return <p>Hello, {name}</p>