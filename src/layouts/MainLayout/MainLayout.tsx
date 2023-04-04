import {MainLayoutProps} from "./MainLayout.props";
import {FC} from "react";
import {Title} from "../../components/ui/Title/Title";

export const MainLayout:FC<MainLayoutProps> = ({children}) => {
    return (
        <div>
            <header>
                <Title size='l' typeTitle='h1'>Matrix Tabular Data</Title>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}