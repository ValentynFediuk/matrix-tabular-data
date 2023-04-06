import { Title } from 'components'
import { type FC } from 'react'
import { Header } from '../components'
import styles from './MainLayout.module.scss'
import { type MainLayoutProps } from './MainLayout.props'

export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
        <div className={styles.layout}>
            <Header>
                <Title className={styles.title} size='l' typeTitle='h1'>Matrix Tabular Data</Title>
            </Header>
            <main>
                {children}
            </main>
        </div>
)
