
// import React, { lazy, Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Layout from './Layout/Layout';
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
// const Home = lazy(() => import('./pages/Home/Home'));
// const Movies = lazy(() => import('./pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

// const App = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="/movies/:movieId" element={<MovieDetails />}>
//             <Route path="cast" element={<Cast />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//         </Route>
//         <Route path="*" element={<div>Not Found</div>} />
//       </Routes>
//     </Suspense>
//   );
// };

// export default App;


import React, { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

const App = () => {

  const [searchResults, setSearchResults] = useState([]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout searchResults={searchResults} setSearchResults={setSearchResults} />
          }
        >
          <Route index element={<Home />} />
          <Route
            path="/movies"
            element={<Movies searchResults={searchResults} setSearchResults={setSearchResults} />}
          />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default App;




// // App.jsx
// import React, { lazy, Suspense } from 'react';
// import {  Route, Routes } from 'react-router-dom';
// import Layout from './Layout/Layout';
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
// const Home = lazy(() => import('./pages/Home/Home'));
// const Movies = lazy(() => import('./pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

// const App = () => {
//   return (
// <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="/movies" element={<Movies />} />
//             <Route path="/movies/:movieId" element={<MovieDetails />}>
//               <Route path="cast" element={<Cast />} />
//               <Route path="reviews" element={<Reviews />} />
//             </Route>
//           </Route>
//           <Route path="*" element={<div>Not Found</div>} />
//         </Routes>
//       </Suspense>
//   );
// };

// export default App;













// // App.jsx
// import React, { lazy, Suspense } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';

// const Layout = lazy(() => import('./Layout/Layout'));
// const Home = lazy(() => import('./pages/Home/Home'));
// const Movies = lazy(() => import('./pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

// const App = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="/movies/:movieId" element={<MovieDetails />} />
//         </Route>
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Suspense>
//   );
// };

// export default App;


