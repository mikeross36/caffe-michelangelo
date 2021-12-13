import {render} from "@testing-library/react"
import About from "./About"
import {BrowserRouter} from "react-router-dom"

const MockAbout = function(){
    return(
        <BrowserRouter>
            <About />
        </BrowserRouter>
    )
};

describe("testing about component", function(){
    test("should render about title", function(){
        const {getByRole} = render(<MockAbout />)
        const title = getByRole("heading")
        expect(title).toHaveTextContent(/nešto o nama.../i)
    })

    test("should render about text", function(){
        const {getAllByTestId} = render(<MockAbout />)
        const parags = getAllByTestId("text")
        expect(parags).toHaveLength(3)
    })
});