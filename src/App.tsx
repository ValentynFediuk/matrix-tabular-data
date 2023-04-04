import {MainLayout} from "layouts";
import { MainPage } from "pages";

export const App = () => {

    return (
        <MainLayout>
            <div className="container">
                <MainPage />
            </div>
        </MainLayout>
    );
};

