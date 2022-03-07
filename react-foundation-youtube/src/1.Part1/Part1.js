import Hello from "./Hello";


function Part1() {
  return (
    <div className="App">
        <h3>props : properties</h3>

        {/* Hello에 값을 전달 */}
        <Hello age={10}/>
        <Hello age={20}/>
        <Hello age={30}/>
    </div>
  );
}

export default Part1;
