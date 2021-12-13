import {render, screen} from "@testing-library/react"
import Tabs from "./Tabs"
import Tab from "./Tab"

describe("testing tabs", function(){
    test("should render header text", function(){
        const {getByText} = render(<Tabs />)
        const headText = getByText(/menu/i)
        expect(headText).toBeVisible()
    })

    test("should render 4 buttons with btn text & icons", function(){
        render(<Tabs />)
        const buttons = screen.getAllByRole("button")
        const text = screen.getAllByTestId("btn-text")
        const icons = screen.getAllByTestId("btn-icon")
        expect(buttons).toHaveLength(4)
        expect(text).toHaveLength(4)
        expect(icons).toHaveLength(4)
    })

    test("should render tab content articles", function(){
        const {getAllByRole} = render(<Tab />)
        const articles = getAllByRole("article")
        expect(articles).toBeTruthy()
    })
})