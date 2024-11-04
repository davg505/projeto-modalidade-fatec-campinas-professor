import { useState } from 'react';
import { BotaoTrapezioPadrao, MenuRetravel } from '../../componetes';
import style from './Avisos.module.css';

export const Avisos = () => {
    const [isMenuRetravelOpen, setIsMenuRetravelOpen] = useState(false);

    // Função para abrir o MenuRetravel e fechar o MenuRetravelModalidade
    const handleBotaoTrapezioPadraoClick = () => {
        setIsMenuRetravelOpen(prev => !prev); // Alterna a visibilidade
    };

    return (
        <div className={style.Aviso}>
            <BotaoTrapezioPadrao 
                toggleMenu={handleBotaoTrapezioPadraoClick} // Adiciona a lógica de clique
            />  
            {isMenuRetravelOpen && (
                <div>
                    <MenuRetravel />
                </div>
            )}
            <div className={style.Conteudo}>
                {/* Primeiro bloco de avisos */}
                <h1>Avisos Importantes para Professores</h1>
                <p>
                    Prezado(a) Professor(a), por favor, fique atento às seguintes informações relacionadas aos seus alunos e ao processo de orientação:
                </p>
                <ul>
                    <li>Lembre-se de revisar os relatórios de estágio dos alunos até o dia 15 de cada mês.</li>
                    <li>Oriente os alunos quanto ao cumprimento da carga horária mínima de 20 horas semanais no estágio.</li>
                    <li>Verifique se as empresas de estágio estão em conformidade com as diretrizes do curso.</li>
                    <li>Em caso de dúvidas sobre o estágio, entre em contato com a coordenação pelo e-mail: coordenacao@universidade.com.</li>
                    <li>O prazo para feedback sobre o relatório final de estágio é até o último dia útil do semestre.</li>
                </ul>
                
                {/* Segundo bloco de avisos */}
                <h1>Entrega de Documentos dos Alunos</h1>
                <p>
                    Além das orientações de estágio, fique atento(a) aos prazos de entrega dos documentos dos alunos:
                </p>
                <ul>
                    <li>Os documentos de aceitação do estágio devem ser assinados e entregues à secretaria até 15 dias após o início do estágio.</li>
                    <li>Certifique-se de que as assinaturas e informações nos documentos dos alunos estejam corretas.</li>
                    <li>A documentação incompleta pode atrasar a validação do estágio dos alunos.</li>
                    <li>Quaisquer alterações nos planos de estágio dos alunos devem ser informadas imediatamente à coordenação.</li>
                </ul>
            </div>
        </div>
    );
};
