import BurgerMenu from '../BurgerMenu'
import Charts from '../Charts'
import Footer from '../Footer/Footer'
import Header from '../Header'
import Navigation from '../Navigation'
import { useBurgerMenu } from '../store'

export default function Layout({ children }) {
  const burger = useBurgerMenu(state => state.burger)
	return (
    <div>
     {burger && <BurgerMenu/>}
		<div>
			<div className='flex flex-none'>
				<Navigation />

				<div className='flex flex-col flex-1 '>
					<Header />
						<main >{children}</main>
				</div>
						<Charts />
			</div>
			<Footer />
		</div>
    </div>
	)
}
