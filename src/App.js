import React, {useEffect, useState} from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Foo from "./Foo/Foo.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import News from "./News/News.jsx";
import Signin from "./MyPages/Signin/Signin.jsx";
import Signup from "./MyPages/Signup/Signup.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import RecipePage from "./MyPages/RecipePage/RecipePage.jsx";
import NewsPage from "./MyPages/NewsPage/NewsPage.jsx";
import Author from "./MyPages/Author/Author.jsx";
import FilterPage from "./MyPages/FilterPage/FilterPage.jsx";
import SearchPage from "./MyPages/SearchPage/SearchPage.jsx";
import AboutUs from "./MyPages/AboutUs/AboutUs.jsx";
import Privacy from "./MyPages/Privacy/Privacy.jsx";
import TermService from "./MyPages/TermService/TermService.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};

function App() {

  return (
    <>
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news" exact component={News} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/filter" exact component={FilterPage} />
        <Route path="/search" exact component={SearchPage} />
        <Route path="/aboutUs" exact component={AboutUs} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/termService" exact component={TermService} />
        <Route 
          path="/author/:author/:authorInfo" 
          exact 
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Author
              author={match.params.author}
              authorInfo={match.params.authorInfo}
            />
          )}
        />
        <Route
          path="/news/:title/:date/:imageId/:content"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <NewsPage
              title={match.params.title}
              date={match.params.date}
              imageId={match.params.imageId}
              content={match.params.content}
            />
          )}
        />
        <Route
          path="/recipe/:title/:imageId/:author/:authorInfo/:reviews/:likes/:shortText/:ingredient/:step1/:step2"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <RecipePage
              title={match.params.title}
              imageId={match.params.imageId}
              author={match.params.author}
              authorInfo={match.params.authorInfo}
              reviews={match.params.reviews}
              likes={match.params.likes}
              shortText={match.params.shortText}
              ingredient={match.params.ingredient}
              step1={match.params.step1}
              step2={match.params.step2}
            />
          )}
        />
        {/* passing parameters via a route path */}
        <Route
          path="/bar/:categoryId/:productId"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Bar
              categoryId={match.params.categoryId}
              productId={match.params.productId}
            />
          )}
        />
        <Route
          path="/baz"
          exact
          render={() => <Baz content={externalContent} />}
        />
        <Route component={Error} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
