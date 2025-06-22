import { MAX_STAT } from "../config/constantes";
import { getBarColor } from "../assets/utils/utils";

/* 
Display this app pokemon statistic.
*/

export const ProgressBar = ({ stats }) => {

    return (
        <>
        <ul>
            {Object.entries(stats).map(([name, value]) => {
                const max = MAX_STAT[name];
                const width = Math.min((value * 3), 300);
                const color = getBarColor(value);
                return (
                    <li key={ name }>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', }}>
                            { name } { value }
                            <div style={{  width: "300px", background: "#eee", height: "10px", borderRadius: "100px", border: '1px solid grey' }}>
                                <div style={{ width: `${width}px`, backgroundColor: color, height: "100%", borderRadius: "100px" }}></div>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
        </>
    );
}