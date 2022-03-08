import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testes todo list', () => {
  it('Testa se possui um título na página', () => {
    render(<App />);
    const title = screen.getByText('Challenge TodoList Ativy');
    expect(title).toBeInTheDocument();
  });
  it('Testa se tem o elemento indicando que ainda não possui todos', () => {
    render(<App />);
    const message = screen.getByText('Nenhum todo até o momento.');
    expect(message).toBeInTheDocument();
  });
  it('Testa se é possível digitar no input', () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
  it('Testa se é possível digitar no input', () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Ter uma carreira sólida na programação.');
    expect(input).toHaveValue('Ter uma carreira sólida na programação.');
  });
  it('Testa se é possível adicionar uma tarefa', async () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Ter uma carreira sólida na programação.');
    const button = screen.getByAltText('mostIcon');
    userEvent.click(button);
    const btnEditar = await screen.findByText('Editar');
    expect(btnEditar).toBeInTheDocument();
  });
  it('Testa se é possível excluir uma tarefa', async () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Ter uma carreira sólida na programação.');
    const button = screen.getByAltText('mostIcon');
    userEvent.click(button);
    userEvent.type(input, 'Ter uma carreira sólida na programação.');
    userEvent.click(button);
    const btnDeletar = await screen.findAllByText('Deletar');
    userEvent.click(btnDeletar[0]);
    const tasks = await screen.findAllByText(
      'Ter uma carreira sólida na programação.'
    );
    expect(tasks).toHaveLength(1);
  });
});
