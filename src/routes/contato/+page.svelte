<h1>Contato</h1>
<form action="https://i.makeagif.com/media/3-16-2024/JgdYWs.gif" method="POST">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />

    <label for="mensagem">Mensagem:</label>
    <textarea id="mensagem" name="mensagem" required></textarea>

    <button type="submit">Enviar</button>
</form>

<style>
    h1 {
        color: #0077cc;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    label {
        font-weight: bold;
    }

    input, textarea {
        padding: 0.5rem;
        font-size: 1rem;
    }

    button {
        padding: 0.5rem 1rem;
        background-color: #0077cc;
        color: white;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #005fa3;
    }
</style>