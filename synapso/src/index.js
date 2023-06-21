import reportWebVitals from './reportWebVitals'; // dev usage only
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import Synapso from './synapso';
import {UserProvider} from "./components/UserProvider";

const root = ReactDOM
    .createRoot(
        document
            .getElementById("synapso")
    );

root.render(
    <StrictMode>
        <UserProvider>
            <Synapso />
        </UserProvider>
    </StrictMode>
);

reportWebVitals(console.log); // dev performance App