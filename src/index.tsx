import { render } from "react-dom";
import { App } from "@/app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/theme-context/ui/ThemeProvider";

const root = document.getElementById("root");

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  root
);

// import {foo} from './test'

// console.log(foo(35,5))
