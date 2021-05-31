import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); //3 colunas com 1 tamanho flexivel todas elas
    gap: 2rem; //espaçamento entre cada item do grid
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-tile);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block; //por padrão o strong vem com display inline e assim o margin-top nao funciona. trocando pra block a margin funciona
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: var(--shape);
        }
    }
`;