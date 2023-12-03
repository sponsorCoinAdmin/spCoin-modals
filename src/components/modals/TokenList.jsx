import React from 'react'
// import tokenList from "../resources/data/tokenEthList.json";
// import styles from '../styles/App.module.css'
import tokenList from "../../resources/data/tokenEthList.json";
import styles from '../../styles/App.module.css'


function modifyToken(obj) {
    alert("Modifying Token Object" + JSON.stringify(obj,null,2));
  }

    function TokenList() {
        // {alert(JSON.stringify(tokenList, null, 2))}
        const tList = tokenList?.map((e, i) => (
            <div
                className={styles.tokenChoice}
                onClick={() => modifyToken(tokenList[i])}
            >
                <img src={e.img} alt={e.ticker} className={styles.tokenLogo} />

                <div className={styles.tokenChoiceNames}>
                    {/* {alert("e.name[" +i+ "] = " + e.name)} */}
                    <div className={styles.tokenName}>{e.name}</div>
                    <div className={styles.tokenTicker}>{e.ticker}</div> 
                </div>
            </div>)
        )
        return (
            <div>
                {tList}
            </div>
        )
    }

export default TokenList
