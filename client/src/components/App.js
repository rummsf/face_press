import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import BookList from "../containers/BookList";
import BookEdit from "./books/BookEdit";
import BookShow from "./books/BookShow";
import BookCreate from "./books/BookCreate";
import BookDelete from "./books/BookDelete";
import WriterList from "../containers/WriterList";
import WriterShow from "./writers/WriterShow";
import Header from "./Header";
import HomePage from "./HomePage";
// import Search from "./Search";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          {/* <Search /> */}
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/books" exact component={BookList} />
            <Route path="/books/new" exact component={BookCreate} />
            <Route path="/books/edit/:id" exact component={BookEdit} />
            <Route path="/books/delete/:id" exact component={BookDelete} />
            <Route path="/books/:id" exact component={BookShow} />
            <Route path="/writers" exact component={WriterList} />
            <Route path="/writers/:id" exact component={WriterShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
