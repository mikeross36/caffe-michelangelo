import {render, screen} from "@testing-library/react"
import Team from "./Team"

describe("testing Team component", function(){
    test("should render components title", function(){
        const {getByText} = render(<Team />)
        const title = getByText("naš tim")
        expect(title).toBeTruthy()
    })

    test("should render 4 team member items with images, names, titles, soc icon links", function(){
        render(<Team />)
        const articles = screen.getAllByRole("article")
        expect(articles).toHaveLength(4)
        const images = screen.getAllByAltText("member")
        expect(images).toHaveLength(4)
        const names = screen.getAllByTestId("name")
        expect(names).toHaveLength(4)
        const titles = screen.getAllByTestId("title")
        expect(titles).toHaveLength(4)
        const iconLinks = screen.getAllByRole("link")
        expect(iconLinks).toHaveLength(12)
    })
})