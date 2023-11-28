import { useState } from 'react';

function Tabs({ values }) {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div>
            <ul className="nav nav-tabs text-sm">
                <li className="nav-item text-dark">
                    <button
                        className={`nav-link text-gray-300 ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => handleTabClick(1)}
                    >
                        PRODUCT PARAMETER
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
                        onClick={() => handleTabClick(2)}
                    >
                        RELATED PRODUCTS
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 3 ? 'active' : ''}`}
                        onClick={() => handleTabClick(3)}
                    >
                        RELATED NEWS
                    </button>
                </li>
            </ul>

            <div className="tab-content">
                <div className={`tab-pane ${activeTab === 1 ? 'active' : ''}`}>
                    <table className="table table-striped">
                        <tbody>
                            {values.map((param, index) => (
                                <tr key={index}>
                                    {param.Part_Number}
                                    {param == 'Category' ? <></> : <></>}
                                    <th>{param.name}</th>
                                    <td>{(param.name === 'Category' || param.name === 'Datasheet') && param.value !== '' ? <a className='text-primary' href={param.value}><u>{param.name=='Datasheet'?`ER6022 Datasheet`:`${param.value}`}</u></a> : <>{param.value}</>}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={`tab-pane ${activeTab === 2 ? 'active' : ''}`}>
                    <h3>Content of Tab 2</h3>
                    <p>This is the content for Tab 2.</p>
                </div>
                <div className={`tab-pane ${activeTab === 3 ? 'active' : ''}`}>
                    <h3>Content of Tab 3</h3>
                    <p>This is the content for Tab 3.</p>
                </div>
            </div>
        </div>
    );
}
Tabs.defaultProps = {
    values: []
};
export default Tabs;
