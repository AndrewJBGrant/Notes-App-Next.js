Testing helps catch bugs you wouldnt have thought of
able to run the tests instead of checking everything manually
Build confidence in your code and tests equals good documentation.

"Error: Uncaught [TypeError: (0, _reactdom.preload) is not a function]" when running jest.
Watching Dave greys video and this error might be an issue


Todos Test examples..

import { render, screen } from '@testing-library/react'
import TodoList from '../TodoList'

const mockTodos = [
    {
        "userId": 1,
        "title": "Wave hello! 👋",
        "completed": false,
        "id": 1
    },
    {
        "userId": 1,
        "title": "Get Coffee ☕☕☕",
        "completed": false,
        "id": 2
    },
]

const mockSetTodos = jest.fn()

describe('TodoList', () => {

    it('should render "No Todos Available" when the array is empty', () => {
        render(<TodoList todos={[]} setTodos={mockSetTodos} />) // ARRANGE

        //ACT
        const message = screen.getByText('No Todos Available')

        expect(message).toBeInTheDocument()// ASSERT
    })

    it('should render a list with the correct number of items', () => {
        render(
            <TodoList todos={mockTodos} setTodos={mockSetTodos} />
        ) // ARRANGE

        //ACT
        const todosArray = screen.getAllByRole('article')

        expect(todosArray.length).toBe(2)// ASSERT
    })

    it('should render the todos in the correct order', () => {
        render(
            <TodoList todos={mockTodos} setTodos={mockSetTodos} />
        ) // ARRANGE

        //ACT
        const firstItem = screen.getAllByTestId("todo-item")[0]

        expect(firstItem).toHaveTextContent("Get Coffee ☕☕☕")// ASSERT
    })

})



Add Todo Tests.

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTodo from '../AddTodo'

const mockSetTodos = jest.fn()

describe('AddTodo', () => {

    describe('Render', () => {

        it('should render the input', () => {
            render(<AddTodo setTodos={mockSetTodos} />) // ARRANGE

            const input = screen.getByPlaceholderText('New Todo') //ACT

            expect(input).toBeInTheDocument()// ASSERT
        })

        it('should render a disabled submit button', () => {
            render(<AddTodo setTodos={mockSetTodos} />) // ARRANGE

            //ACT
            const button = screen.getByRole('button', {
                name: 'Submit'
            })

            expect(button).toBeDisabled()// ASSERT
        })

    })

    describe('Behavior', () => {

        it('should be able to add text to the input', async () => {
            render(<AddTodo setTodos={mockSetTodos} />) // ARRANGE

            const input = screen.getByPlaceholderText('New Todo') //ACT
            await userEvent.type(input, 'hey there')
            expect(input).toHaveValue("hey there")// ASSERT
        })

        it('should enable the submit button when text is input', async () => {
            render(<AddTodo setTodos={mockSetTodos} />) // ARRANGE

            const input = screen.getByPlaceholderText('New Todo') //ACT
            await userEvent.type(input, 'hey there')

            const button = screen.getByRole('button', {
                name: 'Submit'
            })

            expect(button).toBeEnabled() // ASSERT
        })

        it('should empty the text input when submitted', async () => {
            render(<AddTodo setTodos={mockSetTodos} />) // ARRANGE

            const input = screen.getByPlaceholderText('New Todo') //ACT
            await userEvent.type(input, 'hey there')
            const button = screen.getByRole('button', {
                name: 'Submit'
            })
            await userEvent.click(button)

            expect(input).toHaveValue("")// ASSERT
        })

        it('should call setTodos when submitted', async () => {
            render(<AddTodo setTodos={mockSetTodos} />) // ARRANGE

            const input = screen.getByPlaceholderText('New Todo') //ACT
            await userEvent.type(input, 'hey there')
            const button = screen.getByRole('button', {
                name: 'Submit'
            })
            await userEvent.click(button)

            expect(mockSetTodos).toBeCalled()// ASSERT
        })

    })
})


Todo Items Tests..

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoItem from '../TodoItem'

const mockTodo = {
    "userId": 1,
    "title": "Wave hello! 👋",
    "completed": false,
    "id": 1
}

const mockSetTodos = jest.fn()

describe('AddTodo', () => {

    describe('Render', () => {

        it('should render an article', () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />) // ARRANGE

            //ACT
            const article = screen.getByRole('article')

            expect(article).toBeInTheDocument()// ASSERT
        })

        it('should render a label', () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />) // ARRANGE

            //ACT
            const label = screen.getByTestId('todo-item')

            expect(label).toBeInTheDocument()// ASSERT
        })

        it('should render a checkbox', () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />) // ARRANGE

            //ACT
            const checkbox = screen.getByRole('checkbox')

            expect(checkbox).toBeInTheDocument()// ASSERT
        })

        it('should render a button', () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />) // ARRANGE

            //ACT
            const button = screen.getByRole('button')

            expect(button).toBeInTheDocument()// ASSERT
        })

    })

    describe('Behavior', () => {


        it('should call setTodos when checkbox clicked', async () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />) // ARRANGE

            //ACT
            const checkbox = screen.getByRole('checkbox')
            await userEvent.click(checkbox)

            expect(mockSetTodos).toBeCalled()// ASSERT
        })

        it('should call setTodos when button clicked', async () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />) // ARRANGE

            //ACT
            const button = screen.getByRole('button')
            await userEvent.click(button)

            expect(mockSetTodos).toBeCalled()// ASSERT
        })

    })
})
