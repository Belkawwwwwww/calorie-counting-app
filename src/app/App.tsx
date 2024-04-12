import './styles/global.scss'
import {Router} from "@/app/router";
import {Providers} from "@/app/providers/providers";

function App() {
    return (
        <Providers>
            <Router/>
        </Providers>
    )
}

export default App