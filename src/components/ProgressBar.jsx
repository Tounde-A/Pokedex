import { MAX_STAT } from "../config/constantes";
import { getBarColor } from "../assets/utils/utils";
import s from "../components/pokedex.module.css"

/* 
Display this app pokemon statistic.
*/

export const ProgressBar = ({ stats, className }) => {

    return (
        <>
        <ul className={ className }>
            {Object.entries(stats).map(([name, value]) => {
                const max = MAX_STAT[name];
                const width = Math.min((value * 3), 300);
                const color = getBarColor(value);
                return (
                    <li key={ name }>
                        <div>
                            <div>
                                <span>{ name } </span>
                                <span>{ value }</span>
                            </div>
                            <div className={ s.borderInput } >
                                <div className={ s.statInput } style={{ width: `${width}px`, backgroundColor: color }}></div>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
        </>
    );
}