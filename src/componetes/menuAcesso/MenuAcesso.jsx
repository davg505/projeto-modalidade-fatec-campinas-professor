import { useEffect, useState } from "react";
import { UseAppContext } from "../../hooks";
import style from './MenuAcesso.module.css';

export const MenuAcesso = () => { 
    const [showAba, setShowAba] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const { ListaMenuAcesso,
        TabelaTotalAlunoEstagio, 
        TebelaSemSolicitacaoEstagio,
        TebelaComSolicitacaoEstagio,
        TebelaEstagioCancelado,
        carregarListaMenuAcesso,
         carregarTebelaTotalAlunoEstagio,
         carregarTebelaSemSolicitacaoEstagio,
         carregarTebelaComSolicitacaoEstagio,
         carregarTebelaEstagioCancelado,
         } = UseAppContext();

    // Carrega a lista de Dados
    useEffect(() => {
        carregarListaMenuAcesso();
    }, []);

    const handleClick = (id) => {
        setShowAba(true);
        setSelectedId(id);
        if (id === 1) {
            carregarTebelaTotalAlunoEstagio();
        } else if (id === 2) {
            carregarTebelaSemSolicitacaoEstagio();
        } else if (id === 3) {
            carregarTebelaComSolicitacaoEstagio();
        } else if (id === 4) {
            carregarTebelaEstagioCancelado();
        }
    };

    return (
        <div>
            {ListaMenuAcesso
            .filter(item => item.id <= 4)
            .map(item => (
                <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={style.botaoDados}
                >
                    {item.nomeColuna}
                </button>
            ))}

            {/* Exibe a tabela ao abrir a aba */}
            {showAba && selectedId === 1 && (
                <div className={style.tabela}>
                    <h2> Tabela - Estágio </h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome do Aluno</th>
                                <th>Email</th>
                                <th>RA</th>
                                <th>Curso</th>
                                <th>Semestre</th>
                                <th>Data Inicial</th>
                                <th>Data Final</th>
                                <th>Ano</th>
                                <th>Modalidade</th>
                                <th>Status</th>
                                <th>Aprovado/Reprovado</th>
                                <th>Enviar Diretor</th>
                            </tr>
                        </thead>
                        <tbody>
                            { TabelaTotalAlunoEstagio.map((aluno, index) => (
                                <tr key={index}>
                                    <td>{aluno.nomeAluno}</td>
                                    <td>{aluno.email}</td>
                                    <td>{aluno.ra}</td>
                                    <td>{aluno.curso}</td>
                                    <td>{aluno.semestre}</td>
                                    <td>{aluno.dataInicial}</td>
                                    <td>{aluno.dataFinal}</td>
                                    <td>{aluno.ano}</td>
                                    <td>{aluno.modalidade}</td>
                                    <td>{aluno.status}</td>
                                    <td>{aluno.aprovado}</td>
                                    <td>{aluno.enviarDiretor ? 'Sim' : 'Não'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

              {/* Exibe a tabela ao abrir a aba */}
              {showAba && selectedId === 2 && (
                <div className={style.tabela}>
                    <h2> Tabela - Estágio - Sem Solicitacao </h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome do Aluno</th>
                                <th>Email</th>
                                <th>RA</th>
                                <th>Curso</th>
                                <th>Semestre</th>
                                <th>Data Inicial</th>
                                <th>Data Final</th>
                                <th>Ano</th>
                                <th>Modalidade</th>
                                <th>Status</th>
                                <th>Aprovado/Reprovado</th>
                                <th>Enviar Diretor</th>
                            </tr>
                        </thead>
                        <tbody>
                            { TebelaSemSolicitacaoEstagio.map((aluno, index) => (
                                <tr key={index}>
                                    <td>{aluno.nomeAluno}</td>
                                    <td>{aluno.email}</td>
                                    <td>{aluno.ra}</td>
                                    <td>{aluno.curso}</td>
                                    <td>{aluno.semestre}</td>
                                    <td>{aluno.dataInicial}</td>
                                    <td>{aluno.dataFinal}</td>
                                    <td>{aluno.ano}</td>
                                    <td>{aluno.modalidade}</td>
                                 <td> <button> {aluno.status} </button></td>
                                 <td><button> {aluno.aprovado}</button></td>
                                 <td> <button> {aluno.enviarDiretor ? 'Sim' : 'Não'} </button></td>    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

              {/* Exibe a tabela ao abrir a aba */}
              {showAba && selectedId === 3 && (
                <div className={style.tabela}>
                    <h2> Tabela - Estágio - Com solicitação</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome do Aluno</th>
                                <th>Email</th>
                                <th>RA</th>
                                <th>Curso</th>
                                <th>Semestre</th>
                                <th>Data Inicial</th>
                                <th>Data Final</th>
                                <th>Ano</th>
                                <th>Modalidade</th>
                                <th>Status</th>
                                <th>Aprovado/Reprovado</th>
                                <th>Enviar Diretor</th>
                            </tr>
                        </thead>
                        <tbody>
                            { TebelaComSolicitacaoEstagio.map((aluno, index) => (
                                <tr key={index}>
                                    <td>{aluno.nomeAluno}</td>
                                    <td>{aluno.email}</td>
                                    <td>{aluno.ra}</td>
                                    <td>{aluno.curso}</td>
                                    <td>{aluno.semestre}</td>
                                    <td>{aluno.dataInicial}</td>
                                    <td>{aluno.dataFinal}</td>
                                    <td>{aluno.ano}</td>
                                    <td>{aluno.modalidade}</td>
                                    <td> <button> {aluno.status} </button></td>
                                 <td><button> {aluno.aprovado}</button></td>
                                 <td> <button> {aluno.enviarDiretor ? 'Sim' : 'Não'} </button></td>    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

              {/* Exibe a tabela ao abrir a aba */}
              {showAba && selectedId === 4 && (
                <div className={style.tabela}>
                    <h2> Tabela - Estágio - Cancelados </h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome do Aluno</th>
                                <th>Email</th>
                                <th>RA</th>
                                <th>Curso</th>
                                <th>Semestre</th>
                                <th>Data Inicial</th>
                                <th>Data Final</th>
                                <th>Ano</th>
                                <th>Modalidade</th>
                                <th>Status</th>
                                <th>Aprovado/Reprovado</th>
                                <th>Enviar Diretor</th>
                            </tr>
                        </thead>
                        <tbody>
                            { TebelaEstagioCancelado.map((aluno, index) => (
                                <tr key={index}>
                                    <td>{aluno.nomeAluno}</td>
                                    <td>{aluno.email}</td>
                                    <td>{aluno.ra}</td>
                                    <td>{aluno.curso}</td>
                                    <td>{aluno.semestre}</td>
                                    <td>{aluno.dataInicial}</td>
                                    <td>{aluno.dataFinal}</td>
                                    <td>{aluno.ano}</td>
                                    <td>{aluno.modalidade}</td>
                                    <td> <button> {aluno.status} </button></td>
                                 <td><button> {aluno.aprovado}</button></td>
                                 <td> <button> {aluno.enviarDiretor ? 'Sim' : 'Não'} </button></td>    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
