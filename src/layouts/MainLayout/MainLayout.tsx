import {MainLayoutProps} from "./MainLayout.props";
import {FC} from "react";
import { Header } from "../components";
import styles from './MainLayout.module.scss'
import { Title } from "components";

export const MainLayout:FC<MainLayoutProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header>
                <Title className={styles.title} size='l' typeTitle='h1'>Matrix Tabular Data</Title>
            </Header>
            <main>
                {children}
            </main>
        </div>
    )
}