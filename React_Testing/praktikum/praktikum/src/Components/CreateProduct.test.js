import { render, screen, fireEvent } from '@testing-library/react';
import CreateProduct from './CreateProduct';
import '@testing-library/jest-dom';

describe('CreateProduct Component', () => {
    test('should allow Product Name input and display it on the page', () => {
        render( < CreateProduct / > );

        const productNameInput = screen.getByLabelText(/product name/i);
        fireEvent.change(productNameInput, { target: { value: 'New Product' } });

        expect(productNameInput.value).toBe('New Product');
    });

    test('should save and display form selections correctly', () => {
        render( < CreateProduct / > );

        const productCategoryInput = screen.getByLabelText(/product category/i);
        fireEvent.change(productCategoryInput, { target: { value: 'Electronics' } });

        expect(productCategoryInput.value).toBe('Electronics');
    });
});

describe('CreateProduct Validation', () => {
    test('should show error when Product Name is empty', () => {
        render( < CreateProduct / > );

        const submitButton = screen.getByText(/submit/i);
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/product name is required/i);
        expect(errorMessage).toBeInTheDocument();
    });

    test('should show error if Product Name contains invalid characters', () => {
        render( < CreateProduct / > );

        const productNameInput = screen.getByLabelText(/product name/i);
        fireEvent.change(productNameInput, { target: { value: 'Product@123' } });

        const submitButton = screen.getByText(/submit/i);
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/product name cannot contain @, #, {, }/i);
        expect(errorMessage).toBeInTheDocument();
    });

    test('should show error if Product Name exceeds 25 characters', () => {
        render( < CreateProduct / > );

        const productNameInput = screen.getByLabelText(/product name/i);
        fireEvent.change(productNameInput, { target: { value: 'This is a very long product name that exceeds limit' } });

        const submitButton = screen.getByText(/submit/i);
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/product name cannot exceed 25 characters/i);
        expect(errorMessage).toBeInTheDocument();
    });

    test('should show error when any form field is empty', () => {
        render( < CreateProduct / > );

        const productNameInput = screen.getByLabelText(/product name/i);
        const productCategoryInput = screen.getByLabelText(/product category/i);
        const productPriceInput = screen.getByLabelText(/product price/i);

        fireEvent.change(productNameInput, { target: { value: '' } });
        fireEvent.change(productCategoryInput, { target: { value: '' } });
        fireEvent.change(productPriceInput, { target: { value: '' } });

        const submitButton = screen.getByText(/submit/i);
        fireEvent.click(submitButton);

        // Periksa error spesifik untuk setiap field kosong
        const productNameError = screen.getByText(/product name is required/i);
        const productCategoryError = screen.getByText(/product category is required/i);
        const productPriceError = screen.getByText(/product price is required/i);

        expect(productNameError).toBeInTheDocument();
        expect(productCategoryError).toBeInTheDocument();
        expect(productPriceError).toBeInTheDocument();
    });
});