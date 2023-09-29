import Body from "./Components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import { Provider } from "react-redux";
import store from "./utils/Redux/store";
import SearchResultContainer from "./Components/SearchResultContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/results",
          element: <SearchResultContainer />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
