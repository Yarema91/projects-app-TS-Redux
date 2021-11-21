// import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./features/HomePage";
import CardPage from "./features/CardPage";
import Header from "./features/Header";
import Footer from "./features/project/Footer";
// import { useAppSelector } from "./hooks/redux";


const App = () => {
    // const {} = useAppSelector(state => state.productReducer.products);

    return (
       <HashRouter>
        <Header />
            <Switch>
                <Route exact
                    path="/projects" component={HomePage}
                />
                <Route path="/card/:id"
                    component={CardPage}
                />
            </Switch>
            <Footer />

        </HashRouter>
    )
}

export default App
