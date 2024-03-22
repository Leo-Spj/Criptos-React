function CriptoInfo({cryptoData}) {

    return ( 
        (cryptoData) && (
            <div className='info'>

                <div className='main-info'>
                    <span>Ranking: {cryptoData.rank}</span>
                    <h1>{cryptoData.name}</h1>
                    <span className='symbol'>{cryptoData.symbol}</span>
                </div>

                <div className='details'>
                    <ul>
                        {cryptoData && Object.entries(cryptoData).map(([key, value]) => {
                            if (value !== null && key !== 'id' && key !== 'rank' && key !== 'symbol' && key !== 'name' && value !== '') {
                                if (key === 'explorer') {
                                    return (
                                        <li key={key} className="link-explorer">
                                            <span className='label'>{key}: </span>
                                            <a href={value} target="_blank" rel="noopener noreferrer">Link</a>
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={key}>
                                            <span className='label'>{key}: </span>
                                            <span>{isNaN(value) ? value : parseFloat(value).toFixed(4)}</span>
                                        </li>
                                    );
                                }
                            }
                            return null;
                        })}
                    </ul>
                </div>
            </div>
        )
     );
}

export default CriptoInfo;