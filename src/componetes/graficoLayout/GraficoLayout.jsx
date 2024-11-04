import { Chart } from "react-google-charts";
import style from './GraficoLayout.module.css';

// eslint-disable-next-line react/prop-types
export const GraficoLayout = ({ dados }) => {

    const data = [ 
        ["Curso", "Quatidade"],
        // eslint-disable-next-line react/prop-types
        ...dados.map(item => [item.sigla, parseInt(item.Quantidade)])
    ];

    const options = {
        legend: { position: "bottom" },
    };

    return (
        <div className={style.graficoContainer}>
        <Chart
            width="100%"
            height="100%"
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={options}
            rootProps={{ "data-testid": "6" }}
            chartPackages={["corechart", "controls"]}
            render={({ renderControl, renderChart }) => (
            <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
                <div>{renderControl(() => true)}</div>
                <div>{renderChart()}</div>
            </div>
            )}
            controls={[
            {
                controlType: "StringFilter",
                options: {
                    filterColumnIndex: 0,
                    matchType: "any",
                    ui: { label: "Digitar curso:" },
                },
            },
            {
                controlType: "NumberRangeFilter",
                controlID: "age-filter",
                options: {
                    filterColumnIndex: 1,
                    ui: {
                    labelStacking: "vertical",
                    label: "Quantidade:",
                    allowTyping: false,
                    allowMultiple: false,
                    },
                },
            },
            ]}
        />
        </div>
    );
    };
