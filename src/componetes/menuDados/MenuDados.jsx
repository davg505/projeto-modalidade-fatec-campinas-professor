import { useEffect, useState } from "react";
import { UseAppContext } from "../../hooks";
import { Grafico } from "../grafico";
import { GraficoLayout } from "../graficoLayout";
import { GraficoPizza } from "../graficoPizza";
import style from './MenuDados.module.css';

export const MenuDados = () => { 

    const [showMenu, setShowMenu] = useState(false);
    const [showGrafic, setshowGrafic] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const { DadosGerais,
        DadosGti,
        DadosAds,
        DadosGEmpresarial, 
        DadosLogistica, 
        DadosPQuimico, 
        DadosEEEnergetica,
        DadosNumerosEstagio,
        DadosICientifica,
        DadosEProfissional,
        carregarListaDados, 
        listaDados, 
        carregarDadosGerais, 
        carregarDadosGti, 
        carregarDadosAds, 
        carregarDadosGEmpresarial,
        carregarDadosLogistica,
        carregarDadosPQuimico,
        carregarDadosEEEnergetica,
        carregarDadosNumerosEstagio,
        carregarDadosICientifica,
        carregarDadosEProfissional,
    } = UseAppContext();

    // Carrega a lista de Dados
    useEffect(() => {
        carregarListaDados();
    }, []);

    // Função para alternar o menu e carregar os dados correspondentes
    const handleClick = (id) => {
        setShowMenu(true);
        setSelectedId(id);
        if (id === 1) {
            carregarDadosGerais();
        } else if (id === 2) {
            carregarDadosGti();
        } else if (id === 3) {
            carregarDadosAds();
        } else if (id === 4) {
            carregarDadosGEmpresarial();
        } else if (id === 5) {
            carregarDadosLogistica();
        } else if (id === 6) {
            carregarDadosPQuimico();
        } else if (id === 7) {
            carregarDadosEEEnergetica();
        } else if (id === 8) {
            carregarDadosNumerosEstagio();
        } else if (id === 9) {
            carregarDadosICientifica();
        } else if (id === 10) {
            carregarDadosEProfissional();
        }
        
    };

    // Filtra para grafico geral
    const filtrarDadosParaGraficoGeral = (dados) => {
        const idsDesejados = [1, 2, 3];
        return dados.filter(item => idsDesejados.includes(item.id));
    };

    // Filtra para grafico geral pizza
    const filtrarDadosParaGraficoGeralPizza = (dados) => {
        const idsDesejados = [4, 5, 6];
        return dados.filter(item => idsDesejados.includes(item.id));
    };

     // Filtra para grafico geral pizza
    const filtrarDadosParaGraficoCursosLayout = (dados) => {
        const idsDesejados = [7, 8, 9, 10, 11, 12];
        return dados.filter(item => idsDesejados.includes(item.id));
    };



    const handleGrafic = () => {
            setshowGrafic(prevState => !prevState);
            
    }

    return (
        <div>
            {listaDados.map(item => (
                <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={style.botaoDados}
                >
                    {item.nomeColuna}
                </button>
            ))}

            {/* O menu de edição aparece se showMenu for true */}
            {showMenu && (
                <div className={style.Menu}>

                    <button
                        className={style.botaoDadosEditar}
                        onClick={() => handleGrafic()}
                    >
                        Graficos
                    </button>

                    <button 
                        className={style.botaoDadosEditar} 
                        onClick={() => window.open("https://app.powerbi.com/groups/me/reports", "_blank")}
                        >
                        Enviar Dados
                        </button>
                    <div>
                        <h2> Dados Gerais Ativos </h2>
                        {/* Se o id selecionado for 1, exibe dados geral */}
                        {selectedId === 1 && DadosGerais
                        .filter(item => item.id <= 6)
                        .map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p><strong>{item.nomeDado}</strong>:</p>
                                <p>{item.Quantidade}</p>
                            </div>
                            
                        ))}

                        {/* Se o id selecionado for 2, exibe gti */}
                        {selectedId === 2 && DadosGti
                        .filter(item => item.id <= 6)
                        .map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p><strong>{item.nomeDado}</strong>:</p>
                                <p>{item.Quantidade}</p>
                            </div>
                        ))}

                        {/* Se o id selecionado for 3, exibe ads */}
                        {selectedId === 3 && DadosAds
                        .filter(item => item.id <= 6)
                        .map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p><strong>{item.nomeDado}</strong>:</p>
                                <p>{item.Quantidade}</p>
                            </div>
                        ))}

                        {/* Se o id selecionado for 4, exibe GEmpresarial */}
                        {selectedId === 4 && DadosGEmpresarial
                        .filter(item => item.id <= 6)
                        .map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p><strong>{item.nomeDado}</strong>:</p>
                                <p>{item.Quantidade}</p>
                            </div>
                        ))}

                          {/* Se o id selecionado for 5, exibe Logistica */}
                        {selectedId === 5 && DadosLogistica
                        .filter(item => item.id <= 6)
                        .map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p><strong>{item.nomeDado}</strong>:</p>
                                <p>{item.Quantidade}</p>
                            </div>
                        ))}

                          {/* Se o id selecionado for 6, exibe quimico */}
                        {selectedId === 6 && DadosPQuimico
                        .filter(item => item.id <= 6)
                        .map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p><strong>{item.nomeDado}</strong>:</p>
                                <p>{item.Quantidade}</p>
                            </div>
                        ))}

                          {/* Se o id selecionado for 7, exibe EEEnergetica */}
                        {selectedId === 7 && DadosEEEnergetica
                        .filter(item => item.id <= 6)
                        .map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p><strong>{item.nomeDado}</strong>:</p>
                                <p>{item.Quantidade}</p>
                            </div>
                        ))}

                        {/* Se o id selecionado for 8, exibe Estagio */}
                        {selectedId === 8 && DadosNumerosEstagio
                        .map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p><strong>{item.nomeDado}</strong>:</p>
                                <p>{item.Quantidade}</p>
                            </div>
                        ))}

                             {/* Se o id selecionado for 8, exibe Estagio */}
                        {selectedId === 9 &&  DadosICientifica
                        .map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p><strong>{item.nomeDado}</strong>:</p>
                                <p>{item.Quantidade}</p>
                            </div>
                        ))}

                             {/* Se o id selecionado for 8, exibe Estagio */}
                        {selectedId === 10 && DadosEProfissional
                        .map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p><strong>{item.nomeDado}</strong>:</p>
                                <p>{item.Quantidade}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {showGrafic && (
                <div>
                {selectedId === 1 && <Grafico dados={filtrarDadosParaGraficoGeral(DadosGerais)} />}
                {selectedId === 1 && <GraficoPizza dados={filtrarDadosParaGraficoGeralPizza(DadosGerais)} />}
                {selectedId === 1 && <GraficoLayout dados={filtrarDadosParaGraficoCursosLayout(DadosGerais)} />}
                {selectedId === 2 && <Grafico dados={ DadosGti.filter(item => item.id <= 3)} />}
                {selectedId === 2 && <GraficoPizza dados={ DadosGti.filter(item => item.id >= 4 && item.id <= 6)} />}
                {selectedId === 2 && <GraficoLayout dados={ DadosGti.filter(item => item.id >= 7)} />}
                {selectedId === 3 && <Grafico dados={ DadosAds.filter(item => item.id <= 3)} />}
                {selectedId === 3 && <GraficoPizza dados={ DadosAds.filter(item => item.id >= 4 && item.id <= 6)} />}
                {selectedId === 3 && <GraficoLayout dados={ DadosAds.filter(item => item.id >= 7)} />}
                {selectedId === 4 && <Grafico dados={ DadosGEmpresarial.filter(item => item.id <= 3)} />}
                {selectedId === 4 && <GraficoPizza dados={ DadosGEmpresarial.filter(item => item.id >= 4 && item.id <= 6)} />}
                {selectedId === 4 && <GraficoLayout dados={ DadosGEmpresarial.filter(item => item.id >= 7)} />}
                {selectedId === 5 && <Grafico dados={ DadosLogistica.filter(item => item.id <= 3)} />}
                {selectedId === 5 && <GraficoPizza dados={ DadosLogistica.filter(item => item.id >= 4 && item.id <= 6)} />}
                {selectedId === 5 && <GraficoLayout dados={ DadosLogistica.filter(item => item.id >= 7)} />}
                {selectedId === 6 && <Grafico dados={ DadosPQuimico.filter(item => item.id <= 3)} />}
                {selectedId === 6 && <GraficoPizza dados={ DadosPQuimico.filter(item => item.id >= 4 && item.id <= 6)} />}
                {selectedId === 6 && <GraficoLayout dados={ DadosPQuimico.filter(item => item.id >= 7)} />}
                {selectedId === 7 && <Grafico dados={ DadosEEEnergetica.filter(item => item.id <= 3)} />}
                {selectedId === 7 && <GraficoPizza dados={ DadosEEEnergetica.filter(item => item.id >= 4 && item.id <= 6)} />}
                {selectedId === 7 && <GraficoLayout dados={ DadosEEEnergetica.filter(item => item.id >= 7)} />}
                {selectedId === 8 && <Grafico dados={ DadosNumerosEstagio.filter(item => item.id <= 1)} />}
                {selectedId === 8 && <GraficoPizza dados={  DadosNumerosEstagio.filter(item => item.id >= 2 && item.id <= 5)} />}
                {selectedId === 9 && <Grafico dados={ DadosICientifica.filter(item => item.id <= 4)} />}
                {selectedId === 10 && <Grafico dados={ DadosEProfissional.filter(item => item.id <= 4)} />}
            </div>
            )}

        </div>
    );
};
