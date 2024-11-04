import { Chart } from "react-google-charts";
//import { UseAppContext } from "../../hooks";
import style from './Grafico.module.css';


// eslint-disable-next-line react/prop-types
export const Grafico = ({ dados }) => {


    const data = [ 
        ["Tipo", "Quantidade"],
        // eslint-disable-next-line react/prop-types
        ...dados.map(item => [item.sigla, parseInt(item.Quantidade)])
    ];

        const options = {
            title: "Estatísticas Gerais",
        };



    return(
    <div className={style.graficoContainer}>
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="100%"
                data={data}
                options={options}
            />
        </div>

    )


}