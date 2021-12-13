import {render, screen} from "@testing-library/react"
import Portfolio from "./Portfolio"
import {BrowserRouter} from "react-router-dom"

const MockPortfolio = function(){
    return (
        <BrowserRouter>
            <Portfolio />
        </BrowserRouter>
    )
};

describe("testing portfolio component", function(){
    test("should render components title", function(){
        const {getByText} = render(<MockPortfolio />)
        const title = getByText("poznati smo po...")
        expect(title).toHaveClass("portfolio-title")
    })

    test("should render portfoli item images & text", async function(){
        render(<MockPortfolio />)
        const images = screen.getAllByAltText("portfolio data")
        expect(images).toHaveLength(9)
        const texts = screen.getAllByTestId("text")
        expect(texts).toHaveLength(9)
    })

    test("should render main button", function(){
        const {getByRole} = render(<MockPortfolio />)
        const mainBtn = getByRole("button")
        expect(mainBtn).toHaveClass("main-button")
    })
});