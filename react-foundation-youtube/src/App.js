import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import EmptyPage from "./component/EmptyPage";




// Switch 내부는 url에 따라 각각 다른 page를 보여주고
// Switch 외부는 모든 page에 공통적으로 나타난다.

// Switch로 감싸면 일치하는 첫번째 결과를 보여준다. Route path="/day"지만
// path에 /을 포함하고 있으므로 <Day />가 아닌 <DayList />를 보여준다.
// 정확한 경로를 위해 Route exact path를 써야한다.


// url에 있는 값을 day로 사용하려면 주소뒤에 :day로 쓰면 된다.
// day1로 들어왔을 때 day라는 변수를 통해 1이라는 변수를 얻을 수 있다.

function App(){
    return (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <DayList />
                </Route>
                <Route path="/day/:day">
                    <Day />
                </Route>
                <Route>
                    <EmptyPage />
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
    );
}

export default App;