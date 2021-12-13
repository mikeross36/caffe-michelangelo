import {render, screen, fireEvent} from "@testing-library/react"
import Header from "./Header"
import {BrowserRouter} from "react-router-dom"

const mockedToggleMobMenu = jest.fn()

const MockHeader = function({toggleMobMenu}){
    return (
        <BrowserRouter>
            <Header toggleMobMenu={toggleMobMenu}/>
        </BrowserRouter>
    )
}

describe("header & banner testing", function(){
    test("should render logo image", function(){
        const {getByRole} = render(<MockHeader />)
        const logo = getByRole("img")
        expect(logo).toHaveClass("logo")
    })

    test("should render toggle mobile menu function", function(){
        render(
            <MockHeader toggleMobMenu={mockedToggleMobMenu}/>
        )
        const menuBtn = screen.getByRole("button")
        fireEvent.click(menuBtn)
        expect(mockedToggleMobMenu).toBeCalled()
    })

    test("should render desktop & mobile links", function(){
        render(<MockHeader />)
        const links = screen.getAllByRole("list")
        expect(links).toHaveLength(2)
        const deskLinks = screen.getByTestId("desktop-links")
        expect(deskLinks).toHaveClass("links")
        const mobLinks = screen.getByTestId("mobile-links")
        expect(mobLinks).toHaveClass("mob-links")
    })
    
    test("should render banner element with title", function(){
        const {getByRole} = render(<MockHeader />)
        const banner = getByRole("banner")
        expect(banner).toHaveTextContent("Caffe NS Michelangelo")
    })
})