import './App.css'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import styled from 'styled-components'

const Content = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    `;
function App() {
  return (
    <>
        <Navbar/>
        <Content>
            <HomePage />
        </Content>
    </>
  )
}

export default App
