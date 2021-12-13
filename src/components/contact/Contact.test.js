import {render} from "@testing-library/react"
import Contact from "./Contact"

describe("testing contact component", function(){
    test("should render contact title", function(){
        const {getByText} = render(<Contact />)
        const title = getByText(/kontakt/i)
        expect(title).toHaveClass("contact-text")
    })

    test("shoul render 4 address elements", function(){
        const {getAllByTestId} = render(<Contact />)
        const addresses = getAllByTestId("item-info")
        expect(addresses).toHaveLength(4)
    })

    test("should render footer with copyright", function(){
        const {getByRole} = render(<Contact/>)
        const footer = getByRole("contentinfo")
        expect(footer).toContainHTML("p")
    })

    test("shiuld render 4 links with icons", function(){
        const {getAllByRole} = render(<Contact />)
        const links = getAllByRole("link")
        expect(links).toHaveLength(5)
    })
})