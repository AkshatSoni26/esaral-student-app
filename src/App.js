import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './CSS/App.css';
import './CSS/Tab.css';
import './CSS/Phone.css';

import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';


function App() {

  return (
    <Routes >

      <Route path={`/login`} element={<Login />} />

      <Route path={`/register`} element={<Register />} />
      <Route path={`/register/:param`} element={<Register />} />
      <Route path={`/`} element={<Home />} />

      {/* <Route path={`/enrollment`} element={<Enrollments />} />    

      <Route path={`/my-account`} element={<Home />} />
      <Route path={`/courses`} element={<Home />} />
      <Route path={`/mentorship`} element={<Home />} />
      <Route path={`/doubut-solve`} element={<Home />} />
      <Route path={`/help-and-support`} element={<Home />} />

      <Route path='/:subject' element={<SubjectPage />} />
      <Route path='/:subject/:chapter/:content_parent_group/:content_id/:video_id' element={<ChapterPage />} />
      <Route path='/:errorName' element={<GeneralPageError />} />
      <Route path={`/PageNotFound`} element={<ErrorPages />} />

      <Route path={`/search`} element={<Search />} />
      <Route path={`/search/:search_string/:Search_id`} element={<Search />} />

      <Route path={"/practice"} element={<Practice />} />
      <Route path={"/practice/:quizId"} element={<Practice />} />

      <Route path={"/:subject/:chapter/test/:quizId"} element={<Test />} />
      <Route path={"/:subject/:chapter/test/:quizId/:quiz_attempt_id"} element={<Test />} />
      <Route path={"/:subject/:chapter/test/:quizId/instructions"} element={<TestInst />} />
      <Route path={"/:subject/:chapter/test/:quizId/:quiz_attempt_id/Ranking"} element={<Result />} />
      <Route path={"/:subject/:chapter/test/:quizId/:quiz_attempt_id/Solution"} element={<Solution />} /> */}

    </Routes>
  )
}

export default App;
