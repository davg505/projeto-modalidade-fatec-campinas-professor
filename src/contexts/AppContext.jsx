/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { Api } from '../services/Api';

export const AppContext = createContext({});



export const AppContextProvider = (props) => {
    const { children } = props;
    
    const [tabelaAluno, setTabelaAluno] = useState([]);

    const [tabelaEstagio, setTabelaEstagio] = useState([]);

    const [listaDados, setListaDados] = useState([]);  // Estado para armazenar listaMeusDados

    const [DadosGerais, setDadosGerais] = useState([]);  // Estado para armazenar listaMeusDados

    const [DadosGti, setDadosGti] = useState([]);

    const [DadosAds, setDadosAds] = useState([]);

    const [DadosGEmpresarial, setDadosGEmpresarial] = useState([]);

    const [DadosLogistica, setDadosLogistica] = useState([]);

    const [DadosPQuimico, setDadosPQuimico] = useState([]);

    const [DadosEEEnergetica, setDadosEEEnergetica] = useState([]);

    const [DadosNumerosEstagio, setDadosNumerosEstagio] = useState([]);

    const [DadosICientifica, setDadosICientifica] = useState([]);

    const [DadosEProfissional, setDadosEProfissional] = useState([]);

    const [ListaMenuAcesso, setListaMenuAcesso] = useState([]);

    const [TabelaTotalAlunoEstagio, setTabelaTotalAlunoEstagio] = useState([]);


       // Função para carregar lista geral de Dados
        const carregarListaDados = async () => {
        try {
            setListaDados([
                { id: 1, nomeColuna: 'Dados Geral' },
                { id: 2, nomeColuna: 'Dados GTI' },
                { id: 3, nomeColuna: 'Dados ADS' },
                { id: 4, nomeColuna: 'Dados G.Empresarial' },
                { id: 5, nomeColuna: 'Dados Logistica'},
                { id: 6, nomeColuna: 'Dados P.Quimico'},
                { id: 7, nomeColuna: 'Dados E.E.Energetica' },
                { id: 8, nomeColuna: 'Dados Estágio'},
                { id: 9, nomeColuna: 'Dados Iniciação científica' },
                { id: 10, nomeColuna: 'Dados Equivalência profissional' },
            ]);
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
    };


     // Função para carregar lista geral de Dados
     const carregarListaMenuAcesso = async () => {
        try {
            setListaMenuAcesso([
                { id: 1, nomeColuna: 'Lista Total de Alunos Estagio' },
                { id: 2, nomeColuna: 'Lista sem Solicitação Estagio' },
                { id: 3, nomeColuna: 'Lista com Solicitação Estagio' },
                { id: 4, nomeColuna: 'Lista de Estagio Cancelado' },
                { id: 5, nomeColuna: 'Lista Total de Alunos Iniciação científica' },
                { id: 6, nomeColuna: 'Lista sem Solicitação Iniciação científica' },
                { id: 7, nomeColuna: 'Lista com Solicitação Iniciação científica' },
                { id: 8, nomeColuna: 'Lista de Iniciação científica Cancelado' },
                { id: 9, nomeColuna: 'Lista Total de Alunos Equivalência profissional' },
                { id: 10, nomeColuna: 'Lista sem Solicitação Equivalência profissional' },
                { id: 11, nomeColuna: 'Lista com Solicitação Equivalência profissional' },
                { id: 12, nomeColuna: 'Lista de Equivalência profissional Cancelado' },
            ]);
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
    };



    // Função para carregar dados gerar
    const carregarDadosGerais = async () => {
        try {
            setDadosGerais([
                { id: 1, nomeDado: 'Total de alunos em todos cursos', sigla:"Total Alunos", Quantidade:"3750" },
                { id: 2, nomeDado: 'Total alunos com solicitação', sigla:"Sem Solicitação", Quantidade:"1750" },
                { id: 3, nomeDado: 'Total alunos sem solicitação', sigla:"Solicitação", Quantidade:"2000" },
                { id: 4, nomeDado: 'Total Solicitação Estágio', sigla:"Estágio", Quantidade:"789" },
                { id: 5, nomeDado: 'Total Solicitação Iniciação científica', sigla:"Iniciação científica", Quantidade:"100" },
                { id: 6, nomeDado: 'Total Solicitação Equivalência profissional', sigla:"Equivalência profissional", Quantidade:"1758" },
                { id: 7, nomeDado: 'Total GTI', sigla:"GTI", Quantidade:"672" },
                { id: 8, nomeDado: 'Total ADS', sigla:"ADS", Quantidade:"450" },
                { id: 9, nomeDado: 'Total G.Empresarial', sigla:"G.Empresarial", Quantidade:"705" },
                { id: 10, nomeDado: 'Total Logistica', sigla:"Logistica", Quantidade:"522" },
                { id: 11, nomeDado: 'Total P.Quimico', sigla:"P.Quimico", Quantidade:"652" },
                { id: 12, nomeDado: 'Total E.E.Energetica', sigla:"E.E.Energetica", Quantidade:"701" },
            ]);
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
    };

        // Função para carregar dados gti
        const carregarDadosGti = async () => {
            try {
                setDadosGti([
                    { id: 1, nomeDado: 'Total de alunos', sigla:"Total Alunos", Quantidade:"672" },
                    { id: 2, nomeDado: 'Total alunos com solicitação', sigla:"Sem Solicitação", Quantidade:"325" },
                    { id: 3, nomeDado: 'Total alunos sem solicitação', sigla:"Solicitação", Quantidade:"215" },
                    { id: 4, nomeDado: 'Total Solicitação Estágio', sigla:"Estágio", Quantidade:"120" },
                    { id: 5, nomeDado: 'Total Solicitação Iniciação científica', sigla:"Iniciação científica", Quantidade:"10" },
                    { id: 6, nomeDado: 'Total Solicitação Equivalência profissional', sigla:"Equivalência profissional", Quantidade:"210" },
                    { id: 7, nomeDado: 'Semestre 1', sigla:"Semestre 1", Quantidade:"12" },
                    { id: 8, nomeDado: 'Semestre 2', sigla:"Semestre 2", Quantidade:"20" },
                    { id: 9, nomeDado: 'Semestre 3', sigla:"Semestre 3", Quantidade:"25" },
                    { id: 10, nomeDado: 'Semestre 4', sigla:"Semestre 4", Quantidade:"10" },
                    { id: 11, nomeDado: 'Semestre 5', sigla:"Semestre 5", Quantidade:"21" },
                    { id: 12, nomeDado: 'Semestre 6', sigla:"Semestre 6", Quantidade:"25" },
    
                ]);
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
            }
        };

            // Função para carregar dados ADS
        const carregarDadosAds = () => {
            setDadosAds([
            { id: 1, nomeDado: 'Total de alunos', sigla: "Total Alunos", Quantidade: "450" },
            { id: 2, nomeDado: 'Total alunos com solicitação', sigla:"Sem Solicitação", Quantidade:"350" },
            { id: 3, nomeDado: 'Total alunos sem solicitação', sigla:"Solicitação", Quantidade:"100" },
            { id: 4, nomeDado: 'Total Solicitação Estágio', sigla:"Estágio", Quantidade:"100" },
            { id: 5, nomeDado: 'Total Solicitação Iniciação científica', sigla:"Iniciação científica", Quantidade:"5" },
            { id: 6, nomeDado: 'Total Solicitação Equivalência profissional', sigla:"Equivalência profissional", Quantidade:"250" },
            { id: 7, nomeDado: 'Semestre 1', sigla:"Semestre 1", Quantidade:"21" },
            { id: 8, nomeDado: 'Semestre 2', sigla:"Semestre 2", Quantidade:"10" },
            { id: 9, nomeDado: 'Semestre 3', sigla:"Semestre 3", Quantidade:"2" },
            { id: 10, nomeDado: 'Semestre 4', sigla:"Semestre 4", Quantidade:"10" },
            { id: 11, nomeDado: 'Semestre 5', sigla:"Semestre 5", Quantidade:"7" },
            { id: 12, nomeDado: 'Semestre 6', sigla:"Semestre 6", Quantidade:"8" },
            ]);
        };

        // Função para carregar dados G.Empresarial
        const carregarDadosGEmpresarial = () => {
            setDadosGEmpresarial([
            { id: 1, nomeDado: 'Total de alunos', sigla: "Total Alunos", Quantidade: "705" },
            { id: 2, nomeDado: 'Total alunos com solicitação', sigla:"Sem Solicitação", Quantidade:"305" },
            { id: 3, nomeDado: 'Total alunos sem solicitação', sigla:"Solicitação", Quantidade:"205" },
            { id: 4, nomeDado: 'Total Solicitação Estágio', sigla:"Estágio", Quantidade:"205" },
            { id: 5, nomeDado: 'Total Solicitação Iniciação científica', sigla:"Iniciação científica", Quantidade:"5" },
            { id: 6, nomeDado: 'Total Solicitação Equivalência profissional', sigla:"Equivalência profissional", Quantidade:"102" },
            { id: 7, nomeDado: 'Semestre 1', sigla:"Semestre 1", Quantidade:"17" },
            { id: 8, nomeDado: 'Semestre 2', sigla:"Semestre 2", Quantidade:"18" },
            { id: 9, nomeDado: 'Semestre 3', sigla:"Semestre 3", Quantidade:"19" },
            { id: 10, nomeDado: 'Semestre 4', sigla:"Semestre 4", Quantidade:"22" },
            { id: 11, nomeDado: 'Semestre 5', sigla:"Semestre 5", Quantidade:"24" },
            { id: 12, nomeDado: 'Semestre 6', sigla:"Semestre 6", Quantidade:"32" },
            ]);
        };

        // Função para carregar dados Logistica
        const carregarDadosLogistica = () => {
            setDadosLogistica([
            { id: 1, nomeDado: 'Total de alunos', sigla: "Total Alunos", Quantidade: "552" },
            { id: 2, nomeDado: 'Total alunos com solicitação', sigla:"Sem Solicitação", Quantidade:"225" },
            { id: 3, nomeDado: 'Total alunos sem solicitação', sigla:"Solicitação", Quantidade:"235" },
            { id: 4, nomeDado: 'Total Solicitação Estágio', sigla:"Estágio", Quantidade:"241" },
            { id: 5, nomeDado: 'Total Solicitação Iniciação científica', sigla:"Iniciação científica", Quantidade:"2" },
            { id: 6, nomeDado: 'Total Solicitação Equivalência profissional', sigla:"Equivalência profissional", Quantidade:"232" },
            { id: 7, nomeDado: 'Semestre 1', sigla:"Semestre 1", Quantidade:"13" },
            { id: 8, nomeDado: 'Semestre 2', sigla:"Semestre 2", Quantidade:"22" },
            { id: 9, nomeDado: 'Semestre 3', sigla:"Semestre 3", Quantidade:"52" },
            { id: 10, nomeDado: 'Semestre 4', sigla:"Semestre 4", Quantidade:"34" },
            { id: 11, nomeDado: 'Semestre 5', sigla:"Semestre 5", Quantidade:"24" },
            { id: 12, nomeDado: 'Semestre 6', sigla:"Semestre 6", Quantidade:"10" },
        ]);
    };

        // Função para carregar dados P.Quimico
        const carregarDadosPQuimico = () => {
            setDadosPQuimico([
            { id: 1, nomeDado: 'Total de alunos', sigla: "Total Alunos", Quantidade: "652" },
            { id: 2, nomeDado: 'Total alunos com solicitação', sigla:"Sem Solicitação", Quantidade:"1750" },
            { id: 3, nomeDado: 'Total alunos sem solicitação', sigla:"Solicitação", Quantidade:"2000" },
            { id: 4, nomeDado: 'Total Solicitação Estágio', sigla:"Estágio", Quantidade:"235" },
            { id: 5, nomeDado: 'Total Solicitação Iniciação científica', sigla:"Iniciação científica", Quantidade:"3" },
            { id: 6, nomeDado: 'Total Solicitação Equivalência profissional', sigla:"Equivalência profissional", Quantidade:"201" },
            { id: 7, nomeDado: 'Semestre 1', sigla:"Semestre 1", Quantidade:"18" },
            { id: 8, nomeDado: 'Semestre 2', sigla:"Semestre 2", Quantidade:"25" },
            { id: 9, nomeDado: 'Semestre 3', sigla:"Semestre 3", Quantidade:"32" },
            { id: 10, nomeDado: 'Semestre 4', sigla:"Semestre 4", Quantidade:"20" },
            { id: 11, nomeDado: 'Semestre 5', sigla:"Semestre 5", Quantidade:"24" },
            { id: 12, nomeDado: 'Semestre 6', sigla:"Semestre 6", Quantidade:"32" },
            ]);
        };

         // Função para carregar dados P.Quimico
        const carregarDadosEEEnergetica = () => {
            setDadosEEEnergetica([
            { id: 1, nomeDado: 'Total de alunos', sigla: "Total Alunos", Quantidade: "701" },
            { id: 2, nomeDado: 'Total alunos com solicitação', sigla:"Sem Solicitação", Quantidade:"341" },
            { id: 3, nomeDado: 'Total alunos sem solicitação', sigla:"Solicitação", Quantidade:"254" },
            { id: 4, nomeDado: 'Total Solicitação Estágio', sigla:"Estágio", Quantidade:"65" },
            { id: 5, nomeDado: 'Total Solicitação Iniciação científica', sigla:"Iniciação científica", Quantidade:"100" },
            { id: 6, nomeDado: 'Total Solicitação Equivalência profissional', sigla:"Equivalência profissional", Quantidade:"235" },
            { id: 7, nomeDado: 'Semestre 1', sigla:"Semestre 1", Quantidade:"12" },
            { id: 8, nomeDado: 'Semestre 2', sigla:"Semestre 2", Quantidade:"22" },
            { id: 9, nomeDado: 'Semestre 3', sigla:"Semestre 3", Quantidade:"15" },
            { id: 10, nomeDado: 'Semestre 4', sigla:"Semestre 4", Quantidade:"32" },
            { id: 11, nomeDado: 'Semestre 5', sigla:"Semestre 5", Quantidade:"24" },
            { id: 12, nomeDado: 'Semestre 6', sigla:"Semestre 6", Quantidade:"10" },
            ]);
        };


         // Função para carregar dados Estagio
        const carregarDadosNumerosEstagio = () => {
            setDadosNumerosEstagio([
            { id: 1, nomeDado: 'Total de alunos', sigla: "Total Alunos", Quantidade: "789" },
            { id: 2, nomeDado: 'Total alunos estagio obrigtorio', sigla:"Estagio obrigtorio", Quantidade:"325" },
            { id: 3, nomeDado: 'Total alunos não estagio obrigtorio', sigla:"Não estagio obrigtorio", Quantidade:"224" },
            { id: 4, nomeDado: 'Total estagio remunerado', sigla:"Estágio remunerado", Quantidade:"205" },
            { id: 5, nomeDado: 'Total estagio não remunerado', sigla:"Estágio não remunerado", Quantidade:"405" },
            ]);
        };

        // Função para carregar dados ICientifica
        const carregarDadosICientifica = () => {
            setDadosICientifica([
            { id: 1, nomeDado: 'Total de alunos', sigla: "Total Alunos", Quantidade: "100" },
            { id: 2, nomeDado: 'Total alunos em processo', sigla:"Em processo", Quantidade:"75" },
            { id: 3, nomeDado: 'Total alunos concluido', sigla:"Concluido", Quantidade:"25" },
            ]);
        };

        // Função para carregar dados EProfissional
        const carregarDadosEProfissional = () => {
        setDadosEProfissional([
            { id: 1, nomeDado: 'Total de alunos', sigla: "Total Alunos", Quantidade: "1752" },
            { id: 2, nomeDado: 'Total alunos em processo', sigla:"Em processo", Quantidade:"1251" },
            { id: 3, nomeDado: 'Total alunos concluido', sigla:"Concluido", Quantidade:"500" },
        ]);
        };

         // Função para carregar Tebela Total Aluno Estagio
        const carregarTebelaTotalAlunoEstagio = () => {
            const tabelaDados = Array.from({ length: 50 }, (_, index) => ({
                nomeAluno: `Aluno ${index + 1}`,
                email: `aluno${index + 1}@exemplo.com`,
                ra: `RA${1000 + index}`,
                curso: `Curso GTI`, // Exemplos variados de cursos
                semestre: `${index % 10 + 1}º`,
                dataInicial: `2024-01-0${(index % 9) + 1}`,
                dataFinal: `2024-12-0${(index % 9) + 1}`,
                ano: 2024,
                modalidade: 'Estagio' ,
                status: index % 3 === 0 ? 'Com solicitação' : 'Sem solicitação',
                aprovado: index % 2 === 0 ? 'Aprovado' : 'Reprovado',
                enviarDiretor: false // Exemplo de valor booleano
            }));
        
            setTabelaTotalAlunoEstagio(tabelaDados);
        };


        const [TebelaSemSolicitacaoEstagio, setTebelaSemSolicitacaoEstagio] = useState([]);
            // Função para carregar Tebela Total Aluno Estagio
        const carregarTebelaSemSolicitacaoEstagio = () => {
            const tabelaDados = Array.from({ length: 10 }, (_, index) => ({
                nomeAluno: `Aluno ${index + 1}`,
                email: `aluno${index + 1}@exemplo.com`,
                ra: `RA${1000 + index}`,
                curso: `Curso GTI`, // Exemplos variados de cursos
                semestre: `${index % 10 + 1}º`,
                dataInicial: `2024-01-0${(index % 9) + 1}`,
                dataFinal: `2024-12-0${(index % 9) + 1}`,
                ano: 2024,
                modalidade: 'Estagio' ,
                status: 'Sem solicitação',
                aprovado: index % 2 === 0 ? 'Aprovado' : 'Reprovado',
                enviarDiretor: false // Exemplo de valor booleano
            }));
        
            setTebelaSemSolicitacaoEstagio(tabelaDados);
        };

        const [TebelaComSolicitacaoEstagio, setTebelaComSolicitacaoEstagio] = useState([]);
            // Função para carregar Tebela Total Aluno Estagio
            const carregarTebelaComSolicitacaoEstagio = () => {
                const tabelaDados = Array.from({ length: 23 }, (_, index) => ({
                    nomeAluno: `Aluno ${index + 1}`,
                    email: `aluno${index + 1}@exemplo.com`,
                    ra: `RA${1000 + index}`,
                    curso: `Curso GTI`, // Exemplos variados de cursos
                    semestre: `${index % 10 + 1}º`,
                    dataInicial: `2024-01-0${(index % 9) + 1}`,
                    dataFinal: `2024-12-0${(index % 9) + 1}`,
                    ano: 2024,
                    modalidade: 'Estagio' ,
                    status:  'Com solicitação',
                    aprovado: index % 2 === 0 ? 'Aprovado' : 'Reprovado',
                    enviarDiretor: false // Exemplo de valor booleano
                }));
            
                setTebelaComSolicitacaoEstagio(tabelaDados);
            };


            const [TebelaEstagioCancelado, setTebelaEstagioCancelado] = useState([]);
                // Função para carregar Tebela Total Aluno Estagio
        const carregarTebelaEstagioCancelado = () => {
            const tabelaDados = Array.from({ length: 25 }, (_, index) => ({
                nomeAluno: `Aluno ${index + 1}`,
                email: `aluno${index + 1}@exemplo.com`,
                ra: `RA${1000 + index}`,
                curso: `Curso GTI`, // Exemplos variados de cursos
                semestre: `${index % 10 + 1}º`,
                dataInicial: `2024-01-0${(index % 9) + 1}`,
                dataFinal: `2024-12-0${(index % 9) + 1}`,
                ano: 2024,
                modalidade: 'Estagio',
                status: 'Cancedado',
                aprovado: index % 2 === 0 ? 'Aprovado' : 'Reprovado',
                enviarDiretor: false // Exemplo de valor booleano
            }));
        
            setTebelaEstagioCancelado(tabelaDados);
        };

    const [iconesAluno] = useState([
        { id: 1, sigla: 'E', nome:'Estagio', link: '/estagio', texto:'Estagio' },
        { id: 2, sigla: 'IC', nome:'I.Cientifica', link: '/ic' , texto:'Iniciação Cientifica' },
        { id: 3, sigla: 'EP', nome:'E.Profissional' , link: '/ep', texto:'Equivalencia Profissional'},
        { id: 4, sigla: 'MA', nome:'Avisos', link: '/avisos', texto:'Avisos' },
        { id: 5, sigla: 'DD', nome:'Dados',  link: '/dados', texto:'Dados' },
        { id: 6, sigla: 'T', nome:'Tutorial',  link: '/tutorial', texto:'Tutorial' },

        
    ]);
    
    const [iconesEstagio] = useState([
        { id: 1, sigla: 'SE', nome:'S.Estágio',  texto:'Solicitar Estágio' },
        { id: 3, sigla: 'CS', nome:'C.Solicitação' ,  texto:'Cancelar Solicitação'},
        { id: 4, sigla: 'PP', nome:'P.Período' ,  texto:'Prorrogação de período' },
        { id: 5, sigla: 'EO', nome:'N.O.Obrigatório' ,  texto:'Não Obrigatório para Obrigatório' },
        { id: 6, sigla: 'RT', nome:'R.Termo',  texto:'Rescisão do termo' },
        { id: 7, sigla: 'RE', nome:'R.Estágio' ,  texto:'Relatório de estágio' },
        { id: 8, sigla: 'FA', nome:'F.Avaliação',  texto:'Ficha de avaliação'  },
        { id: 9, sigla: 'FE', nome:'F.Estágio',  texto:'Finalização do Estágio' },
    
    ]);




    // Carega os botoes para area I Cientifica 
    const [iconesICientifica] = useState([
        { id: 1, sigla: 'SIC', nome:'S.I.Cientifica',  texto:'Solicitar I.Cientifica' },

    ]);


       // Entrada dos dados da empresa. 
        const adicionarDadosEmpresa = async (dadosEmpresaEstagio) => {

        const { data: alunoData } = await Api.get('/aluno'); 
        if (!alunoData || alunoData.length === 0) {
            throw new Error('Nenhum aluno encontrado');
        }
        const aluno = alunoData[0];

        try {
            const novaDadosEmpresa = {
                ...dadosEmpresaEstagio,
                alunoId:aluno.id,
                id: Date.now,
            };
            const response = await Api.post('/entradaEmpresaAluno', novaDadosEmpresa);
        
            console.log('Solicitação enviada com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao enviar solicitação:', error);
        }
    };

    
       // Entrada dos dados da empresa. 
    const adicionarDadosEstagioAluno = async (dadosEstagioAluno) => {

        const { data: alunoData } = await Api.get('/aluno'); 
        if (!alunoData || alunoData.length === 0) {
            throw new Error('Nenhum aluno encontrado');
        }
        const aluno = alunoData[0];

        try {
            const novaDadosEmpresa = {
                ...dadosEstagioAluno,
                alunoId:aluno.id,
                id: Date.now,
            };
            const response = await Api.post('/entradaDadosEstagioAluno', novaDadosEmpresa);
        
            console.log('Solicitação enviada com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao enviar solicitação:', error);
        }
    };



    // Enviar dados para TERMO DE COMPROMISSO PARA A REALIZAÇÃO DE ESTÁGIO SUPERVISIONADO NÃO OBRIGATÓRIO (REMUNERADO)
    const enviarDadosTermoNOR = async () => {
        try {
            const { data: empresaData } = await Api.get('/entradaEmpresaAluno');
            console.log('Dados da Empresa:', empresaData);
            if (!empresaData || empresaData.length === 0) {
                throw new Error('Nenhum dado empresa encontrado');
            ;
            }
            const dadosEmpresa = empresaData[0];

            const { data: estagioData } = await Api.get('/entradaDadosEstagioAluno');
            if (!estagioData || estagioData.length === 0) {
                throw new Error('Nenhum aluno encontrado');
            }

            const dadosEstagio = estagioData[0];

            const { data: alunoData } = await Api.get('/aluno'); 
            if (!alunoData || alunoData.length === 0) {
                throw new Error('Nenhum aluno encontrado');
            }
            const aluno = alunoData[0];

            const { data: pessoalData } = await Api.get('/dadosPessoalAluno'); 
            if (!pessoalData || pessoalData.length === 0) {
                throw new Error('Nenhum aluno encontrado');
            }
            const pessoal = pessoalData[0];

            const { data: dadosFatec } = await Api.get('/dadosFatec'); 
            if (!dadosFatec || dadosFatec.length === 0) {
                throw new Error('Nenhum aluno encontrado');
            }
            const fatec = dadosFatec[0];

            const { data: dadosFatecCurso } = await Api.get('/dadosFatecCurso'); 
            if (!dadosFatecCurso || dadosFatecCurso.length === 0) {
                throw new Error('Nenhum aluno encontrado');
            }
            const curso = dadosFatecCurso[0];


            const dadosParaTermo = {
                ...dadosEmpresa,
                nomeEmpresa: dadosEmpresa.name,
                ...dadosEstagio,
                ...aluno,
                ...pessoal,
                rgAluno: pessoal.rg,
                enderecoAluno: pessoal.endereco,
                ...curso,
                cidadeFatec: fatec.cidade,
                enderecoFatec: fatec.endereco,
            
            };
        return dadosParaTermo;
        } catch (error) {
        console.error('Erro ao buscar dados do aluno:', error);
        return null;
        }
    };
    
    // Editar Solicitacao Estagio
    const editarSolicitacaoEstagio = async (solicitacao) => {

        const { data: alunoData } = await Api.get('/aluno'); 
        if (!alunoData || alunoData.length === 0) {
            throw new Error('Nenhum aluno encontrado');
        }
        const aluno = alunoData[0];

        const { data: estagioData } = await Api.get('/estagio'); 
        if (!estagioData || estagioData.length === 0) {
            throw new Error('Nenhum estágio encontrado');
        }
        const estagio = estagioData[0];

        try {
            const editadoSolicitacao = {
                ...solicitacao,
                alunoId:aluno.id,
            };

            const estagioAlteracao = {
                ...estagio,
                TipoDeEstagio: solicitacao.estagioTipo,
                modelo: solicitacao.estagioModelo,
            };

            const response = await Api.put('/entradaSolitacao', editadoSolicitacao);
            const response1 = await Api.put(`/estagio/${estagio.id}`,  estagioAlteracao);

            console.log('Solicitação enviada com sucesso:', response.data, response1 );
        } catch (error) {
            console.error('Erro ao enviar solicitação:', error);
        }
    };

    // Nova entrada de solicação
    const adicionarSolicitacaoEstagio = async (solicitacao) => {

        const { data: alunoData } = await Api.get('/aluno'); 
        if (!alunoData || alunoData.length === 0) {
            throw new Error('Nenhum aluno encontrado');
        }
        const aluno = alunoData[0];

        const { data: estagioData } = await Api.get('/estagio'); 
        if (!estagioData || estagioData.length === 0) {
            throw new Error('Nenhum estágio encontrado');
        }
        const estagio = estagioData[0];

        try {
            const novaSolicitacao = {
                ...solicitacao,
                alunoId:aluno.id,
            };

            const alunoAlteracao = {
                ...aluno,
                status:'Enviado Solicitação',
                modalidade:'Estágio',
            };

            const estagioAlteracao = {
                ...estagio,
                TipoDeEstagio: solicitacao.estagioTipo,
                modelo: solicitacao.estagioModelo,
            };

            const response = await Api.post('/entradaSolitacao', novaSolicitacao);
            const response1 = await Api.put(`/aluno/${aluno.id}`,  alunoAlteracao);
            const response2 = await Api.put(`/estagio/${estagio.id}`,  estagioAlteracao);

            console.log('Solicitação enviada com sucesso:', response.data, response1, response2);
        } catch (error) {
            console.error('Erro ao enviar solicitação:', error);
        }
    };

    // Carrega dados do aluno da pagina estagio 
    const carregarTabelaAluno = async () => {
        try {
            const { data } = await Api.get('/aluno'); // Buscando os dados da API
            const aluno = data[0]; // Assumindo que a API retorna um array com um único objeto
            setTabelaAluno([
                { id: 1, nomeColuna: 'Nome do aluno', dadoColuna: aluno.nomeDoAluno },
                { id: 2, nomeColuna: 'Email', dadoColuna: aluno.email },
                { id: 3, nomeColuna: 'Ra', dadoColuna: aluno.ra },
                { id: 4, nomeColuna: 'Curso', dadoColuna: aluno.curso },
                { id: 5, nomeColuna: 'Status', dadoColuna: aluno.status },
                { id: 6, nomeColuna: 'Modalidade', dadoColuna: aluno.modalidade },
            ]);
        } catch (error) {
            console.error('Erro ao carregar dados do aluno:', error);
        }
    };


    const carregarDadosEstagio = async () => {
        try {
            const { data } = await Api.get('/estagio');
            const estagio = data[0];
            setTabelaEstagio([
                { id: 1, nomeColuna:'Status', dadoColuna: estagio.status },
                { id: 2, nomeColuna:'Tipo de estágio',  dadoColuna:estagio.TipoDeEstagio},
                { id: 3, nomeColuna:'Modelo',  dadoColuna: estagio.modelo  },
                { id: 4, nomeColuna:'Solicitação',  dadoColuna: estagio.solicitacao  },
                { id: 5, nomeColuna:'Data da Solicitação',  dadoColuna: estagio.dataSolicitacao },
                { id: 6, nomeColuna:'Status do Termo',  dadoColuna: estagio.statusDoTermo  },
                { id: 7, nomeColuna:'Prorrogação de período',  dadoColuna: estagio.prorrogacaoPeriodo },
                { id: 8, nomeColuna:'Transição obrigatorio',  dadoColuna:estagio.transicaoDoObrigatorio },
                { id: 9, nomeColuna:'Rescisão do termo',  dadoColuna: estagio.rescisaoTermo },
                { id: 10, nomeColuna:'Relatório de estágio',  dadoColuna: estagio.relatorioEstagio},
                { id: 11, nomeColuna:'Ficha de avaliação',  dadoColuna: estagio.FichaAvaliacao  },
            ]);
        }catch (error) {
            console.error('Erro ao carregar dados do estagio:', error);
        }
    };

    const cancelarSolicitacaoEstagio = async () => {

        const { data: alunoData } = await Api.get('/aluno'); 
        if (!alunoData || alunoData.length === 0) {
            throw new Error('Nenhum aluno encontrado');
        }
        const aluno = alunoData[0];

        const { data: estagioData } = await Api.get('/estagio'); 
        if (!estagioData || estagioData.length === 0) {
            throw new Error('Nenhum estágio encontrado');
        }
        const estagio = estagioData[0];


        
        try {
            const alunoAlteracao = {
                ...aluno,
                status:'Cancelado Solicitação',
                modalidade:'Não realizado',
            };

            const estagioAlteracao = {
                ...estagio,
                TipoDeEstagio:'Sem definição',
                modelo:'Sem definição',
            };

            const response1 = await Api.put(`/aluno/${aluno.id}`,  alunoAlteracao);
            const response2 = await Api.put(`/estagio/${estagio.id}`,  estagioAlteracao);

            console.log('Solicitação enviada com sucesso:', response1, response2);
        } catch (error) {
            console.error('Erro ao enviar solicitação:', error);
        }
    };

    const carregarDadosEstagioDoTermo = async () => {

        const { data: alunoData } = await Api.get('/aluno'); 
        if (!alunoData || alunoData.length === 0) {
            throw new Error('Nenhum aluno encontrado');
        }

        const { data: estagioData } = await Api.get('/estagio'); 
        if (!estagioData || estagioData.length === 0) {
            throw new Error('Nenhum estágio encontrado');
        }
        const estagio = estagioData[0];

        try {
            //Termo de Compromisso de Estágio não Obrigatório Remunerado
            if(estagio.TipoDeEstagio === "naoObrigatorio" && estagio.modelo === "remunerado") {
                return "Termo de Compromisso de Estágio não Obrigatório Remunerado";
            } else if (estagio.TipoDeEstagio === "obrigatorio" && estagio.modelo === "remunerado") {
                return "Termo de Compromisso de Estágio Obrigatório Remunerado";
            } else if (estagio.TipoDeEstagio === "obrigatorio" && estagio.modelo === "naoRemunerado") {
                return "Termo de Compromisso de Estágio Obrigatório não Remunerado";
            }
            else{
                return "Sem Solicitação";
            }

        }catch (error) {
            console.error('Erro ao carregar dados do estagio:', error);
        }
    };




    
    return (
        <AppContext.Provider
            value={{iconesAluno,
                    iconesEstagio,
                    tabelaAluno,
                    tabelaEstagio,
                    iconesICientifica,
                    adicionarSolicitacaoEstagio,
                    carregarTabelaAluno,
                    carregarDadosEstagio,
                    editarSolicitacaoEstagio,
                    cancelarSolicitacaoEstagio,
                    carregarDadosEstagioDoTermo,
                    enviarDadosTermoNOR,
                    adicionarDadosEmpresa,
                    adicionarDadosEstagioAluno,
                    listaDados,
                    DadosGerais,
                    DadosGti,
                    DadosAds,
                    DadosGEmpresarial,
                    DadosLogistica,
                    DadosPQuimico,
                    DadosEEEnergetica,
                    DadosNumerosEstagio,
                    DadosICientifica,
                    DadosEProfissional,
                    ListaMenuAcesso,
                    TabelaTotalAlunoEstagio,
                    TebelaSemSolicitacaoEstagio,
                    TebelaComSolicitacaoEstagio,
                    TebelaEstagioCancelado,
                    carregarListaDados,
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
                    carregarListaMenuAcesso,
                    carregarTebelaTotalAlunoEstagio,
                    carregarTebelaSemSolicitacaoEstagio,
                    carregarTebelaComSolicitacaoEstagio,
                    carregarTebelaEstagioCancelado,
                }}
        >
            {children}
        </AppContext.Provider>
    );
};
