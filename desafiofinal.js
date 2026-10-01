const usuarios = [
    { id: 1, nome: 'Ana Silva', idade: 22, ativo: true, cargo: 'Desenvolvedora' },
    { id: 2, nome: 'Bruno Costa', idade: 17, ativo: true, cargo: 'Estagiário' },
    { id: 3, nome: 'Carlos Souza', idade: 30, ativo: false, cargo: 'Designer' },
    { id: 4, nome: 'Diana Lima', idade: 25, ativo: true, cargo: 'Tech Lead' },
];

function listarUsuarios() {
    return usuarios.map((usuario) => ({
        nome: usuario.nome,
        cargo: usuario.cargo,
    }));
}

function buscarUsuarioPorId(id) {
    return usuarios.find((usuario) => usuario.id === id);
}

function listarUsuariosAtivos() {
    return usuarios.filter((usuario) => usuario.ativo === true);
}

function existeUsuarioInativo() {
    return usuarios.some((usuario) => usuario.ativo === false);
}

function todosUsuariosMaioresDeIdade() {
    return usuarios.every((usuario) => usuario.idade >= 18);
}

function calcularMediaIdade() {
    const soma = usuarios.reduce((total, usuario) => total + usuario.idade, 0);
    return soma / usuarios.length;
}

console.log('Lista resumida:', listarUsuarios());
console.log('Buscar ID 2:', buscarUsuarioPorId(2));
console.log('Ativos:', listarUsuariosAtivos());
console.log('Há inativos?', existeUsuarioInativo());
console.log('Todos maiores de idade?', todosUsuariosMaioresDeIdade());
console.log('Média de idade:', calcularMediaIdade());