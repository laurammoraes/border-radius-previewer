import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn()
  }
})
describe('App Component', () => {
  test('should sow a box', () =>{
    const { getByLabelText } = render(<App />);
    expect(getByLabelText('Box')).toHaveStyle({
      width: '200px',
      height: '200px',
      backgroundColor: 'cornflowerblue',
      borderRadius: '0% 0% 0% 0%'
    });

  });

  test('should change the border-raius', () =>{
    const { getByLabelText } = render(<App />);

    const topLeftInput = getByLabelText('Top Left');
    const topRightInput = getByLabelText('Top Right');
    const bottomLeftInput = getByLabelText('Bottom Left');
    const bottomRightInput = getByLabelText('Bottom Right');

    userEvent.clear(topLeftInput);
    userEvent.type(topLeftInput, '100');
    userEvent.clear(topRightInput);
    userEvent.type(topRightInput, '100');
    userEvent.clear(bottomLeftInput);
    userEvent.type(bottomLeftInput, '100')
    userEvent.clear(bottomRightInput);
    userEvent.type(bottomRightInput, '100'); 

    expect(getByLabelText('Box')).toHaveStyle({
      borderRadius:'100% 100% 100% 100%'
    });
  })

  test('should copy the code', ()=> {
    const { getByLabelText } = render(<App />);

    const code = getByLabelText('Code');
    userEvent.click(code);

    expect(code).toHaveTextContent('Border-radius: 0% 0% 0% 0%')
    expect(navigator.clipboard.writeText).toHaveBeenCalled();
  })
})
