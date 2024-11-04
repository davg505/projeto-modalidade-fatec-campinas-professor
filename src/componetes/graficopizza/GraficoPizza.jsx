import { Chart } from "react-google-charts";
import style from './GraficoPizza.module.css';

// eslint-disable-next-line react/prop-types
export const GraficoPizza = ({ dados }) => {

    const data = [ 
        ["Tipo", "Quantidade"],
        // eslint-disable-next-line react/prop-types
        ...dados.map(item => [item.sigla, parseInt(item.Quantidade)])
    ];

        
        const options = {
            title: "Estatísticas Gerais",
            pieHole: 0.4,
            is3D: false,
        };

    return(
    <div className={style.graficoContainer}>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"105%"}
                height={"250px"}
            />
        </div>

    )


}