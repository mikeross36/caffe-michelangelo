import {render, screen} from "@testing-library/react"
import Services from "./Services"

describe("testing services component", function(){
    test("should render title", function(){
        const {getByText} = render(<Services />)
        const title = getByText(/naša ponuda/i)
        expect(title).toHaveClass("title-text")
    })

    test("should render 8 service items with images, titles, text & buttons", function(){
        render(<Services />)
        const articles = screen.getAllByRole("article")
        expect(articles).toHaveLength(8)
        const images = screen.getAllByRole("img")
        expect(images).toHaveLength(8)
        const titles = screen.getAllByTestId("title")
        expect(titles).toHaveLength(8)
        const texts = screen.getAllByTestId("text")
        expect(texts).toHaveLength(8)
        const buttons = screen.getAllByRole("button")
        expect(buttons).toHaveLength(8)
    })
})